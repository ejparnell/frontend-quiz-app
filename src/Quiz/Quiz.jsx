import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SubHeading from '../shared/SubHeading/SubHeading'
import H1 from '../shared/H1/H1'
import QuizIcon from '../shared/QuizIcon/QuizIcon'
import Button from '../shared/Button/Button'
import { useQuiz } from '../QuizProvider/QuizProvider'

const QuestionWrapper = styled.div`
  height: 129px;
  width: 100%;
`

const QuestionText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.typography.colors.primary};
  font-weight: 400;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 36px;
    }
`

const ProgressContainer = styled.div`
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.progressBar.background};
  border-radius: 50px;
  overflow: hidden;
  margin: 15px 0;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        margin: 100px 100px 0 0;
        width: initial;
    }
`

const Filler = styled.div`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background-color: ${({ theme }) => theme.sharedTheme.colors.purple};
  border-radius: inherit;
  transition: width 0.5s ease-in-out;
`

const OptionWrapper = styled.div`
  margin-top: 16px;
  box-shadow: 0px 0px 10px 5px rgba(4, 5, 5, 0.15);
  border-radius: 8px;
`

const OptionLabel = styled.label`
  border: 3px solid
    ${({ theme, checked, $submitted, $correct }) => {
        if ($submitted) {
            if ($correct && checked) return theme.sharedTheme.colors.green || 'green'
            if (checked) return theme.sharedTheme.colors.red || 'red'
            return 'transparent'
        }
        return checked ? theme.sharedTheme.colors.purple : 'transparent'
    }};
  border-radius: 20px;
  cursor: pointer;
  transition: border 0.3s ease;
  background-color: ${({ theme }) => theme.quizSubjectLink.background};
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.typography.colors.primary};

  @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
    height: 92px;
    font-size: 28px;
  }
`

const HiddenInput = styled.input`
  display: none;
`

const OptionLetter = styled.span`
  height: 40px;
  width: 40px;
  background-color: ${({ theme, $checked, $correct, $submitted }) => {
        if ($submitted && $checked && $correct) return theme.sharedTheme.colors.green || 'green'
        if ($submitted && $checked && !$correct) return theme.sharedTheme.colors.red || 'red'
        return $checked ? theme.sharedTheme.colors.purple : theme.sharedTheme.colors.lightGrey
    }};
  color: ${({ theme, $checked }) =>
        $checked ? theme.sharedTheme.colors.white : theme.sharedTheme.colors.greyNavy};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 8px;
  margin-right: 15px;

  @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
    height: 56px;
    width: 56px;
    font-size: 28px;
  }
`

const Icon = styled.img`
  margin-left: auto;
`

const SubmitButton = styled.button`
  height: 64px;
  background-color: ${({ theme }) => theme.sharedTheme.colors.purple};
  color: ${({ theme }) => theme.sharedTheme.colors.white};
  border: none;
  border-radius: 20px;
  width: 100%;
  margin-top: 16px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
    height: 92px;
    font-size: 28px;
  }
`

const CompletedWrapper = styled.div`
  height: 242px;
  width: 100%;
  background-color: ${({ theme }) => theme.quizSubjectLink.background};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        min-height: 388px;
    }
`

const CompletedText = styled.p`
  font-size: 18px;
  font-weight: 550;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.typography.colors.primary};
    
        @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
            font-size: 28px;
        }
`

const CompletedIconWrapper = styled.div`
  height: 40px;
  width: 167px;
  display: flex;
  align-items: center;
  margin: 10px 0;
`

const Score = styled.p`
  font-size: 80px;
  font-weight: 500;
  color: ${({ theme }) => theme.typography.colors.primary};
  margin-bottom: 10px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 144px;
    }
`

const ScoreText = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.typography.colors.secondary};

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 24px;
    }
`

const QuestionContainer = styled.div`
    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        min-height: 452px;
    }
`

const QuestionForm = styled.form`
    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
`

export default function Quiz() {
    const navigate = useNavigate()
    const { subjectId } = useParams()
    const { quiz, handleSetQuiz, loading, error, quizSubjects } = useQuiz()

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')
    const [score, setScore] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [answerResult, setAnswerResult] = useState(null)
    const [quizComplete, setQuizComplete] = useState(false)

    useEffect(() => {
        handleSetQuiz(subjectId)
    }, [subjectId, handleSetQuiz])

    if (loading) return 'Loading...'
    if (error) return 'Error loading quiz data'
    if (!quiz) return 'No quiz found'

    const totalQuestions = quiz.questions.length
    const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100
    const currentQ = quiz.questions[currentQuestion]
    const optionLetters = ['A', 'B', 'C', 'D']

    const handleSubmit = (event) => {
        event.preventDefault()

        if (isSubmitted) {
            if (currentQuestion === totalQuestions - 1) {
                setQuizComplete(true)
            } else {
                setCurrentQuestion(currentQuestion + 1)
            }
            setSelectedOption('')
            setIsSubmitted(false)
            setAnswerResult(null)
            return
        }

        if (!selectedOption) return

        if (selectedOption === currentQ.answer) {
            setAnswerResult("correct")
            setScore(score + 1)
        } else {
            setAnswerResult("incorrect")
        }
        setIsSubmitted(true)
    }

    if (quizComplete) {
        const subject = quizSubjects.find(
            (subject) => subject.name.toLowerCase() === subjectId.toLowerCase()
        )
        return (
            <>
                <div>
                    <H1 regular="Quiz complete" bold="You scored..." />
                </div>
                <div>
                    <CompletedWrapper>
                        <CompletedIconWrapper>
                            <QuizIcon subject={subject} />
                            <CompletedText>{subject.name}</CompletedText>
                        </CompletedIconWrapper>
                        <Score>{score}</Score>
                        <ScoreText>out of {totalQuestions}</ScoreText>
                    </CompletedWrapper>
                    <Button handleClick={() => navigate('/')}>Play Again</Button>
                </div>
            </>
        )
    }

    return (
        <>
            <QuestionContainer>
                <QuestionWrapper>
                    <SubHeading>
                        Question {currentQuestion + 1} of {totalQuestions}
                    </SubHeading>
                    <QuestionText>{currentQ.question}</QuestionText>
                </QuestionWrapper>
                <ProgressContainer>
                    <Filler $percentage={progressPercentage} />
                </ProgressContainer>
            </QuestionContainer>
            <QuestionForm onSubmit={handleSubmit}>
                {currentQ.options.map((option, index) => {
                    const isOptionSelected = selectedOption === option
                    const isOptionCorrect = option === currentQ.answer

                    return (
                        <OptionWrapper key={index}>
                            <HiddenInput
                                type="radio"
                                id={`option-${index}`}
                                name="option"
                                value={option}
                                checked={isOptionSelected}
                                onChange={() => setSelectedOption(option)}
                                disabled={isSubmitted}
                            />
                            <OptionLabel
                                htmlFor={`option-${index}`}
                                checked={isOptionSelected}
                                $submitted={isSubmitted}
                                $correct={isOptionCorrect}
                            >
                                <OptionLetter
                                    $checked={isOptionSelected}
                                    $correct={isOptionCorrect}
                                    $submitted={isSubmitted}
                                >
                                    {optionLetters[index]}
                                </OptionLetter>
                                {option}
                                {isSubmitted && isOptionCorrect && (
                                    <Icon src="/images/icon-correct.svg" />
                                )}
                                {isSubmitted && isOptionSelected && !isOptionCorrect && (
                                    <Icon src="/images/icon-error.svg" />
                                )}
                            </OptionLabel>
                        </OptionWrapper>
                    )
                })}
                <SubmitButton type="submit">
                    {isSubmitted ? 'Next Question' : 'Submit Answer'}
                </SubmitButton>
            </QuestionForm>
        </>
    )
}
