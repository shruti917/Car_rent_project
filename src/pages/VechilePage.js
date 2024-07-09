import React from 'react';
import { useParams } from 'react-router-dom';
import VehicleDetail from '../component/Vehicle/VehicleDetails';

const VehiclePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Vehicle Details</h1>
      <VehicleDetail vehicleId={id} />
    </div>
  );
};

export default VehiclePage;
