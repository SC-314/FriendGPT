import { create } from 'zustand';

const usePersonalityStore = create((set) => ({
    PersonalityStore: "",
    setPersonalityStore: (PersonalityStore) => set({PersonalityStore: PersonalityStore})
}))

export default usePersonalityStore;