import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App.jsx'
import { QuizProvider } from './QuizProvider/QuizProvider'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <QuizProvider>
            <App />
        </QuizProvider>
    </BrowserRouter>
)