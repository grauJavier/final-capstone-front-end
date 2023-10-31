import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import NotFound from './components/NotFound'
import Register from './components/Register_Login_forms/Register'
import Login from './components/Register_Login_forms/Login'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
