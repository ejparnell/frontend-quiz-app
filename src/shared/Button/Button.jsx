import styled from 'styled-components'

const ButtonWrapper = styled.button`
    height: 56px;
    background-color: ${({ theme }) => theme.sharedTheme.colors.purple};
    color: ${({ theme }) => theme.sharedTheme.colors.white};
    border: none;
    border-radius: 8px;
    width: 100%;
    margin-top: 16px;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 500;

    &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
    }

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        height: 92px;
        font-size: 28px;
    }
`

export default function Button({ children, handleClick }) {
    return (
        <ButtonWrapper onClick={handleClick}>
            {children}
        </ButtonWrapper>
    )
}