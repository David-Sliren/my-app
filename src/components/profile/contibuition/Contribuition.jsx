"use client";

import React from "react";
import { TableContribuition } from "./table/TableContribuition";
import { HeaderStat } from "./HeaderStat";
import { useUserQueryById } from "@/hooks/tanstack/query/useQueryUser";

const Empty = () => {
  return (
    <span className="text-primary-container text-2xl text-center">
      No tienes colaboraciones
    </span>
  );
};

export const Contribuition = ({ patientId }) => {
  const { data } = useUserQueryById(patientId);
  const contributions = data?.contributions;

  return (
    <section className="mb-16 animate-slide-in-bottom">
      <HeaderStat />
      <TableContribuition contributions={contributions} />
    </section>
  );
};
