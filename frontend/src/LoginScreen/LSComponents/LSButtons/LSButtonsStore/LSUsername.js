import { create } from 'zustand';

const useUsernameStore = create((set) => ({
    username: "",
    setUsername: (newUsername) => set({ username: newUsername })
}));

export default useUsernameStore;
