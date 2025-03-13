import { create } from 'zustand';

const useNameStore = create((set) => ({
    NameStore: "",
    setNameStore: (NameStore) => set({NameStore: NameStore})
}))

export default useNameStore;