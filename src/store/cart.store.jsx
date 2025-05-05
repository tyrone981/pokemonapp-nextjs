import { create } from 'zustand';

export const useCart = create((set) => ({
  cartIds: [],

  addToCart: (id) => {
    set((state) => {
      if (!state.cartIds.includes(id)) {
        return { cartIds: [...state.cartIds, id] };
      }
      return state;
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartIds: state.cartIds.filter((item) => item !== id),
    }));
  },

  toggleCartIcon: (id) => {
    set((state) => {
      const isAlreadySelected = state.cartIds.includes(id);
      return {
        cartIds: isAlreadySelected
          ? state.cartIds.filter((item) => item !== id)
          : [...state.cartIds, id],
      };
    });
  },

  clearAll: () => set({ cartIds: [] }),
}));
