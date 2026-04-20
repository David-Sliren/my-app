import { create } from "zustand";

const paginationStore = create((set) => ({
  page: 0,
  ItemsPage: 4,

  setIncremetPage: () => set((state) => ({ page: state.page + 1 })),
  setDecremetPage: () => set((state) => ({ page: state.page - 1 })),
}));

export const usePaginationStore = () => {
  const page = paginationStore((state) => state.page);
  const ItemsPage = paginationStore((state) => state.ItemsPage);
  const setIncremetPage = paginationStore((state) => state.setIncremetPage);
  const setDecremetPage = paginationStore((state) => state.setDecremetPage);

  return {
    page,
    ItemsPage,
    // handlers
    setIncremetPage,
    setDecremetPage,
  };
};
