import { create } from 'zustand';

const useHistoryListStore = create((set) => ({
    HistoryListStore: [],
    setHistoryListStore: (HistoryListStore) => set({HistoryListStore: HistoryListStore})
}))

export default useHistoryListStore;