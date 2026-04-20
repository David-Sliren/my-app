import React from "react";
import { LuHeart } from "react-icons/lu";

const Slogan = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-semibold uppercase tracking-wider animate-fade-in-right">
      <LuHeart className="text-sm" fill="content" />
      Cuidado Familiar Colectivo
    </div>
  );
};

export const CallToAction = () => {
  return (
    <>
      <Slogan />
      <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-on-background leading-[1.1] animate-fade-in-down">
        Unidos por el bienestar de{" "}
        <span className="text-primary italic">Aleida</span>.
      </h1>
      <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed animate-fade-in-right">
        Gestionemos juntos el tratamiento médico de nuestra familia con
        transparencia y amor. Cada contribución asegura que la atención de
        calidad nunca se detenga.
      </p>
    </>
  );
};
