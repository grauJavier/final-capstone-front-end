import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Places from './components/places/Places'
import NotFound from './components/NotFound'
import Register from './components/Register_Login_forms/Register'
import Login from './components/Register_Login_forms/Login'
import NoticeAlert from './components/NoticeAlert'
import ProtectedRoute from './components/utils/ProtectedRoute'
import PublicRoute from './components/utils/PublicRoutes'
import './index.css'

function App() {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <NoticeAlert />
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route index path="/" element={<Places />} />
        </Route>
        <Route element={<PublicRoute user={user} />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PublicRoute user={user} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
