export const theme = {
    colors: {
        purple: '#A729F5',
        darkNavy: '#313E51',
        darckGrey: '#3B4D66',
        greyNavy: '#626C7F',
        lightBlueishGrey: '#ABC1E1',
        lightGrey: '#F4F6FA',
        white: '#FFFFFF',
        green: '#26D782',
        red: '#EE5454'
    },
    typography: {
        font: '"Rubik", serif'
    }
}
const sharedTheme = {
    colors: {
        purple: '#A729F5',
        white: '#FFFFFF',
        lightGrey: '#F4F6FA',
        greyNavy: '#626C7F',
    },
    typography: {
        font: '"Rubik", serif'
    },
    breakpoints: {
        tablet: '768px',
        desktop: '1024px'
    }
}
export const lightTheme = {
    typography: {
        colors: {
            primary: '#313E51',
            secondary: '#626C7F'
        }
    },
    background: {
        color: '#F4F6FA',
        images: {
            mobile: '/images/pattern-background-mobile-light.svg',
            tablet: '/images/pattern-background-tablet-light.svg',
            desktop: '/images/pattern-background-desktop-light.svg'
        }
    },
    quizSubjectLink: {
        background: '#FFFFFF',
    },
    progressBar: {
        background: '#FFFFFF',
    },
    sharedTheme
}
export const darkTheme = {
    typography: {
        colors: {
            primary: '#FFFFFF',
            secondary: '#ABC1E1'
        }
    },
    background: {
        color: '#3B4D66',
        images: {
            mobile: '/images/pattern-background-mobile-dark.svg',
            tablet: '/images/pattern-background-tablet-dark.svg',
            desktop: '/images/pattern-background-desktop-dark.svg'
        }
    },
    quizSubjectLink: {
        background: '#3B4D66',
    },
    progressBar: {
        background: '#3B4D66',
    },
    sharedTheme
}