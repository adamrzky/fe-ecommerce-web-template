import { create } from 'zustand';

export const useSearchStore = create((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  minPrice: '',
  setMinPrice: (minPrice) => set({ minPrice }),

  maxPrice: '',
  setMaxPrice: (maxPrice) => set({ maxPrice }),

  category: '',
  setCategory: (category) => set({ category }),
}));
