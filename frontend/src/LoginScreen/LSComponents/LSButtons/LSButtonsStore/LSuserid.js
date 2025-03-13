import { create } from 'zustand';

const useLSuserid = create((set) => ({
    LSuserid: null,
    setLSuserid: (LSuserid) => set({ LSuserid : LSuserid })
}));

export default useLSuserid;