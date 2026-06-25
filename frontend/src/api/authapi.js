
import apiClient from './apiconfi.js';

export const userService = {
  signup : async (data) => await apiClient.post('auth/signup',data),
  signin : async(data) => await apiClient.post('auth/login',data),
  checkauth : async () => await apiClient.get('auth/checksession')
};