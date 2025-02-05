import styled, { createGlobalStyle} from 'styled-components'
import { ThemeToggleProvider } from '../ThemeToggleProvider/ThemeToggleProvider'
import Header from '../Header/Header'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Rubik", serif;
        background-color: ${({ theme }) => theme.background.color};
        background-image: ${({ theme }) => `url(${theme.background.images.mobile})`};
        min-height: 100vh;
        width: 100%;
        background-size: cover;
    }

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.tablet}) {
        body {
            background-image: ${({ theme }) => `url(${theme.background.images.tablet})`};
        }
    }

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        body {
            background-image: ${({ theme }) => `url(${theme.background.images.desktop})`};
        }
    }
`

const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.tablet}) {
        padding: 40px;
    }
    
    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        padding: 80px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
`

export default function Layout({ children }) {

    return (
        <ThemeToggleProvider>
            <GlobalStyle/>
            <Header />
            <Main>{children}</Main>
        </ThemeToggleProvider>
    )
}