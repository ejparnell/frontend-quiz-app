import styled from 'styled-components'

const H1Wrapper = styled.h1`
    font-family: ${({ theme }) => theme.sharedTheme.typography.font};
    color: ${({ theme }) => theme.typography.colors.primary};
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 15px;
    font-size: 40px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 64px;
    }
`

const H1Bold = styled.span`
    font-weight: 400;
`

export default function H1({ regular, bold }) {
    return (
        <H1Wrapper>
            {regular} <br />
            <H1Bold>{bold}</H1Bold>
        </H1Wrapper>
    )
}