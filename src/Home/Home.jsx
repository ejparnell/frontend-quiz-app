import styled from 'styled-components'
import { Link } from 'react-router-dom'
import H1 from '../shared/H1/H1'
import SubHeading from '../shared/SubHeading/SubHeading'
import QuizIcon from '../shared/QuizIcon/QuizIcon'

const quizSubjects = [
    {
        id: 1,
        name: 'HTML',
        icon: '/images/icon-html.svg',
        bgColor: '#FFF1E9'
    },
    {
        id: 2,
        name: 'CSS',
        icon: '/images/icon-css.svg',
        bgColor: '#E0FDEF'
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: '/images/icon-js.svg',
        bgColor: '#EBF0FF'
    },
    {
        id: 4,
        name: 'Accessibility',
        icon: '/images/icon-accessibility.svg',
        bgColor: '#F6E7FF'
    }
]

const QuizSubjectButton = styled.button`
    width: 100%;
    height: 64px;
    background-color: ${({ theme }) => theme.quizSubjectLink.background};
    border-radius: 20px;
    margin-top: 16px;
    text-align: left;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 0px 10px 5px rgba(4, 5, 5, 0.15);
    padding: 20px;

    &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
    }

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        height: 98px;
    }
`

const QuizSubjectText = styled.p`
    font-size: 18px;
    font-weight: 550;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.typography.colors.primary};

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 28px;
    }
`

const QuizSubjectLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const HeadingWrapper = styled.div`
`

const QuizSubjectWrapper = styled.div`
`

export default function Home() {
    return (
        <>
            <HeadingWrapper>
                <H1 regular='Welcome to the' bold='Frontend Quiz!' />
                <SubHeading>Pick a subject to get started.</SubHeading>
            </HeadingWrapper>
            <QuizSubjectWrapper>
                {quizSubjects.map(subject => (
                    <QuizSubjectLink key={subject.id} to={`/quiz/${subject.name.toLowerCase()}`}>
                        <QuizSubjectButton >
                            <QuizIcon subject={subject} />
                            <QuizSubjectText>{subject.name}</QuizSubjectText>
                        </QuizSubjectButton>
                    </QuizSubjectLink>
                    
                ))}
            </QuizSubjectWrapper>
        </>
    )
}