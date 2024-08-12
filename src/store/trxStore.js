import { create } from 'zustand';

export const useTrxStore = create((set) => ({
  trx: {},
  setTrx: (trx) => set({ trx }),
}));
