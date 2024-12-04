import { create } from "zustand";

const useNavbarStore = create((set) => ({
  isHomeSelected: true, // Default active tab is "Home"
  setHomeSelected: (isSelected) =>
    set(() => ({ isHomeSelected: isSelected })),
}));

export default useNavbarStore;
