import { create } from 'zustand';

const usePasswordStore = create((set) => ({
    password: "",
    setPassword: (newPassword) => set({ password: newPassword})
}));

export default usePasswordStore;