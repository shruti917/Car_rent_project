import React, { useState, useEffect } from 'react';
import vehicleService from '../../services/vehicleService';
import { Link } from 'wouter';
import './VehicleList.css';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await vehicleService.getVehicles();
        setVehicles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="vehicle-list">
      <h1>Available Vehicles</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <Link to={`/vehicles/${vehicle.id}`}>{vehicle.make} {vehicle.model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
