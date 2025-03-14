import { create } from 'zustand';

const useChatInput = create((set) => ({
    chatInput: "",
    setChatInput: (chatInput) => set({chatInput : chatInput})
}))

export default useChatInput;