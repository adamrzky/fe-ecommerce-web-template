import create from "zustand";
import { persist } from "zustand/middleware";

export const useProductCheckoutStore = create(persist((set) => ({
    id: 0, 
    setID: (id) => set({ id }),
}), {
    name: "product-checkout-storage", 
    getStorage: () => localStorage, 
}));
