import { create } from 'zustand';

const useIsGirlStore = create((set) => ({
    IsGirlStore: true,
    setIsGirlStore: (IsGirlStore) => set({IsGirlStore: IsGirlStore})
}))

export default useIsGirlStore;