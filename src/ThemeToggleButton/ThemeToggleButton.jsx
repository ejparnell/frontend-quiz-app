import styled from 'styled-components'
import { useTheme } from '../ThemeToggleProvider/ThemeToggleProvider'

const Switch = styled.button`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  background-color: ${({ theme }) => theme.sharedTheme.colors.purple};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease;

  @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
    width: 42px;
    height: 28px;
  }
`

const Slider = styled.span`
  position: absolute;
  top: 2.5px;
  left: ${({ $themeMode }) => ($themeMode === 'light' ? '2.5px' : '14.5px')};
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.2s ease;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        top: 3.5px;
        left: ${({ $themeMode }) => ($themeMode === 'light' ? '3.5px' : '18.5px')};
        width: 20px;
        height: 20px;
    }
`

const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ToggleImage = styled.img`
    width: 16px;
    height: 16px;
    margin: 0 8px;

    @media (min-width: ${({ theme }) => theme.sharedTheme.breakpoints.desktop}) {
        width: 24px;
        height: 24px;
    }
`

export default function ThemeToggleButton() {
    const { themeMode, toggleTheme } = useTheme()

    return (
        <ToggleWrapper>
            <ToggleImage src={`/images/icon-sun-${themeMode === 'light' ? 'dark' : 'light'}.svg`} alt='Sun icon' />
            <Switch $themeMode={themeMode} onClick={toggleTheme}>
                <Slider $themeMode={themeMode} />
            </Switch>
            <ToggleImage src={`/images/icon-moon-${themeMode === 'light' ? 'dark' : 'light'}.svg`} alt='Moon icon' />
        </ToggleWrapper>
    )
}
