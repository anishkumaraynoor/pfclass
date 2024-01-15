import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Auth></Auth>} />
        <Route path='/register' element={<Auth insideRegister></Auth>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/projects' element={<Projects></Projects>} />
        <Route path='/*' element={<Navigate to={'/'}></Navigate>} />
      </Routes>
      <Footer></Footer>
      
    </>
  )
}

export default App
