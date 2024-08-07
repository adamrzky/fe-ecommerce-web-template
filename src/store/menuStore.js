import { create } from "zustand";

const useMenuStore = create((set) => ({
  activeMenu: "",
  setActiveMenu: (menu) => set({ activeMenu: menu }),
}));

export default useMenuStore;
