import create from "zustand";

export const useProductCheckoutStore = create((set) => ({
  id: 0,
  setID: (id) => set({ id: id }),
}));
