import { create } from 'zustand';

const useSelectionStore = create((set) => ({
    SelectionStore: 'false',
    setSelectionStore: (SelectionStore) => set({SelectionStore: SelectionStore})
}))

export default useSelectionStore;