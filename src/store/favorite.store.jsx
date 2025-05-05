import { create } from 'zustand'


export const useStoreFavorite = create((set) => ({
    selectedFavoriteIds:[],
    toggleHeartIcon:(id) =>{
        set((state) => {
            const isAlreadySelected = state.selectedFavoriteIds.includes(id);
            return {
              ...state,
              selectedFavoriteIds: isAlreadySelected
                ? state.selectedFavoriteIds.filter((item) => item !== id) // Remove if exists
                : [...state.selectedFavoriteIds, id], // Add if not exists
            };
          });
    },
    clearAll: () => set({selectedFavoriteIds: [] }),
}))
    
