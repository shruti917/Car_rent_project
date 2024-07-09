import api from './api';

// Function to log in a user
const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Function to register a new user
const register = async (email, password) => {
  try {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

// Function to log out a user
const logout = () => {
  localStorage.removeItem('token');
};

// Function to get the current user token
const getCurrentUser = () => {
  return localStorage.getItem('token');
};

export default { login, register, logout, getCurrentUser };
