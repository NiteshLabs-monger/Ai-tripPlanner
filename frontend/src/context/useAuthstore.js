import { create } from 'zustand';


export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true, 

  setAuth: (user) => set({ user, isAuthenticated: true, isCheckingAuth: false }),
  clearAuth: () => set({ user: null, isAuthenticated: false, isCheckingAuth: false }),
  setCheckingAuth: (status) => set({ isCheckingAuth: status }),
}));