import styled from 'styled-components'

const SubHeadingWrapper = styled.h2`
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.typography.colors.secondary};
    margin-bottom: 15px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        font-size: 20px;
    }
`

export default function SubHeading({ children }) {
    return (
        <SubHeadingWrapper>
            {children}
        </SubHeadingWrapper>
    )
}