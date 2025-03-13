import { create } from 'zustand';

const useHistoryChatid = create((set) => ({
    HistoryChatid: 0,
    setHistoryChatid: (HistoryChatid) => set({HistoryChatid: HistoryChatid})
}))

export default useHistoryChatid;