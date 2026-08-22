"use client";

import React from "react";
import { UserImg } from "./UserImg";
import { UserInfo } from "./UserInfo";
import { useUserQueryById } from "@/hooks/tanstack/query/useQueryUser";

export const User = ({ patientId }) => {
  const { data } = useUserQueryById(patientId);
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mb-16 animate-slide-in-top">
      <UserImg profiledata={data} />
      <UserInfo profiledata={data} />
    </section>
  );
};
