
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './component/layout/MainLayout';
import HomePage from './pages/HomePage';
import VehiclesPage from './pages/VechilePage';
import BookingsPage from './pages/BookingPage';
import ProfilePage from './pages/UserProfilePage';

import Login from './component/Autho/Login';

const App = () => {
  return (

<Router>
<MainLayout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/vehicles" element={<VehiclesPage />} />
    <Route path="/bookings" element={<BookingsPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</MainLayout>
</Router>
  );
};

export default App;
