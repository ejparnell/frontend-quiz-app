import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton'
import QuizIcon from '../shared/QuizIcon/QuizIcon'
import { useQuiz } from '../QuizProvider/QuizProvider'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 15px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.tablet}) {
        padding: 40px 80px;
        height: 150px;
    }
`

const LeftContainer = styled.div`
`

const RightContainer = styled.div`
`

const QuizIconText = styled.p`
    font-size: 18px;
    font-weight: 550;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.typography.colors.primary};

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 28px;
    }
`

const QuizTitle = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
`

export default function Header() {
    const { quiz, quizSubjects } = useQuiz()
    const [currentSubject, setCurrentSubject] = useState(null)

    useEffect(() => {
        if (quiz) {
            const foundSubject = quizSubjects.find(subject => {
                return subject.name.toLowerCase() === quiz.title.toLowerCase()
            })
            setCurrentSubject(foundSubject)
        }
    }, [quiz, quizSubjects])

    return (
        <HeaderWrapper>
            <LeftContainer>
                {currentSubject && (
                    <QuizTitle>
                        <QuizIcon subject={currentSubject} />
                        <QuizIconText>{currentSubject.name}</QuizIconText>
                    </QuizTitle>
                )}
            </LeftContainer>
            <RightContainer>
                <ThemeToggleButton />
            </RightContainer>
        </HeaderWrapper>
    )
}
