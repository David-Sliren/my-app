"use client";

import { useState } from "react";

export const usePagination = (totalItems, itemsPerPage = 4) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = (page + 1) * itemsPerPage;

  const nextPage = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const prevPage = () => setPage((p) => Math.max(0, p - 1));

  const currentItems =
    startIndex + itemsPerPage > totalItems
      ? totalItems
      : startIndex + itemsPerPage;
  const isFirstPage = page === 0;
  const islastPage = page === totalPages - 1;

  return {
    page,
    totalPages,
    totalItems,
    startIndex,
    endIndex,
    currentItems,
    isFirstPage,
    islastPage,

    // Handlers

    nextPage,
    prevPage,
  };
};
