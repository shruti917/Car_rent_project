import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import vehicleService from '../../services/vehicleService';
import './VehicleDetail.css';
import { Link } from 'react-router-dom';

const VehicleDetail = ({ vehicleId }) => {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        if (!vehicleId) {
          throw new Error('Invalid vehicle ID');
        }
        const data = await vehicleService.getVehicleDetails(vehicleId);
        setVehicle(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setVehicle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!vehicle) return <p>Vehicle not found</p>;

  return (
    <div className="vehicle-detail">
      <h1>{vehicle.make} {vehicle.model}</h1>
      <p>Year: {vehicle.year}</p>
      <p>Price: ${vehicle.price}</p>
      <p>Description: {vehicle.description}</p>
      <Link to="/bookings">Book Now</Link>
    </div>
  );
};

export default VehicleDetail;

