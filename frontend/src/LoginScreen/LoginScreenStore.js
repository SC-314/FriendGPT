import { create } from "zustand";

const useLoggedIn = create((set) => ({
    LoggedIn: 'false',
    setLoggedIn: (LoggedIn) => set({ LoggedIn: LoggedIn})
}));

export default useLoggedIn;