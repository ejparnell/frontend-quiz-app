import styled from 'styled-components'

const QuizSubjectImageWrapper = styled.div`
    height: 40px;
    width: 40px;
    background-color: ${({ $bgColor }) => $bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 20px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        height: 56px;
        width: 56px;
    }
`

const QuizSubjectImage = styled.img`
    height: 28.57px;
    width: 28.57px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        height: 40px;
        width: 40px;
    }
`

export default function QuizIcon({ subject }) {
    return (
        <QuizSubjectImageWrapper $bgColor={subject.bgColor}>
            <QuizSubjectImage src={subject.icon} alt={`${subject.name} icon`} />
        </QuizSubjectImageWrapper>
    )
}