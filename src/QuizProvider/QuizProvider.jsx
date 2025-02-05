import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import quizData from './data.json'

const QuizContext = createContext()

export const useQuiz = () => useContext(QuizContext)

export const QuizProvider = ({ children }) => {
    const location = useLocation()
    const [allQuizData, setAllQuizData] = useState([])
    const [quiz, setQuiz] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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


    useEffect(() => {
        try {
            setLoading(true)
            setAllQuizData(quizData.quizzes)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (location.pathname === '/') {
            setQuiz(null)
        }
    }, [location.pathname])

    const handleSetQuiz = useCallback((subject) => {
        const selectedQuiz = allQuizData.find(
            (quiz) => quiz.title.toLowerCase() === subject.toLowerCase()
        )
        setQuiz(selectedQuiz)
    }, [allQuizData])

    return (
        <QuizContext.Provider value={{ quiz, handleSetQuiz, loading, error, quizSubjects }}>
            {children}
        </QuizContext.Provider>
    )
}
