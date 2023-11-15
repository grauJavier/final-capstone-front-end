import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Places from './components/places/Places'
import NotFound from './components/utils/NotFound'
import Register from './components/register_login_forms/Register'
import Login from './components/register_login_forms/Login'
import NoticeAlert from './components/utils/NoticeAlert'
import ProtectedRoute from './components/utils/ProtectedRoute'
import PublicRoute from './components/utils/PublicRoutes'
import PlaceForm from './components/place_form/PlaceForm.jsx'
import NavBar from './components/navigation_bar/NavBar'
import './App.css'
import ReservationForm from './components/reservation_form/ReservationForm'
import MyReservations from './components/my_reservations/MyReservations.jsx'
import PlaceDetails from './components/place_details/PlaceDetails.jsx'
import MyPlaces from './components/my_places/MyPlaces.jsx'

const App = () => {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <NoticeAlert />
      { user && <NavBar />}
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route index path="/" element={<Navigate to="/places" />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id/details" element={<PlaceDetails />} />
          <Route path="/new-place" element={<PlaceForm />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/my-places" element={<MyPlaces />} />
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
