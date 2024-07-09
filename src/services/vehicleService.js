import api from './api';

const getVehicles = async () => {
  try {
    const response = await api.get('/vehicles');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch vehicles');
  }
};

const getVehicleDetails = async (vehicleId) => {
  try {
    const response = await api.get(`/vehicles/${vehicleId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch vehicle details');
  }
};

export default { getVehicles, getVehicleDetails };
