import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import NotFound from './components/NotFound'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
