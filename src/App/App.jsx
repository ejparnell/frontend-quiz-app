import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import { ContactCard } from '../ContactCard/ContactCard'
import Quiz from '../Quiz/Quiz'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz/:subjectId' element={<Quiz />} />
        </Routes>
      {/* <ContactCard /> */}
    </Layout>
  )
}

export default App
