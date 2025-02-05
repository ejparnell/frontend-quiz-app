import { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeToggleProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light')

    useEffect(() => {
        const storedTheme = localStorage.getItem('themeMode')
        if (storedTheme) {
            setThemeMode(storedTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = themeMode === 'light' ? 'dark' : 'light'
        setThemeMode(newTheme)
        localStorage.setItem('themeMode', newTheme)
    }

    const theme = themeMode === 'light' ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}
