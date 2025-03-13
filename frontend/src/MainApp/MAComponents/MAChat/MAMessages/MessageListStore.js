import { create } from 'zustand';

const useMessageListStore = create((set) => ({
    MessageListStore: [],
    setMessageListStore: (MessageListStore) => set({ MessageListStore: MessageListStore })
}));

export default useMessageListStore;