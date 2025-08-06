import { create } from "zustand";

const useLandingStore = create((set) => ({
  isDesignToolOpen: false,
  setIsDesignToolOpen: () => set(() => ({ isDesignToolOpen: true })),
  setIsDesignToolClose: () => set(() => ({ isDesignToolOpen: false })),
}));

export default useLandingStore;
