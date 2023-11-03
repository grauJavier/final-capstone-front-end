import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Places from './components/places/Places'
import NotFound from './components/NotFound'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Places />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
