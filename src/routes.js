import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VehiclePage from './pages/VehiclePage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';
import UserProfilePage from './pages/UserProfilePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/vehicle/:vehicleId" component={VehiclePage} />
      <Route path="/booking/:vehicleId" component={BookingPage} />
      <Route path="/checkout/:bookingId" component={CheckoutPage} />
      <Route path="/profile" component={UserProfilePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
