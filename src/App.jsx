import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Places from './components/places/Places'
import NotFound from './components/NotFound'
import Register from './components/Register_Login_forms/Register'
import Login from './components/Register_Login_forms/Login'
import NoticeAlert from './components/NoticeAlert'
import ProtectedRoute from './components/utils/ProtectedRoute'
import PublicRoute from './components/utils/PublicRoutes'
import NavBar from './components/Navigation_bar/NavBar'
import './App.css'
import ReservationForm from './components/reservationForm/ReservationForm'
import MyReservations from './components/myReservations/MyReservations.jsx'
import PlacesDetails from './components/place_details/PlaceDetails.jsx'

function App() {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <NoticeAlert />
      { user && <NavBar />}
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route index path="/" element={<Places />} />
          <Route path="/places/:id/details" element={<PlacesDetails />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/my-reservations" element={<MyReservations />} />
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
