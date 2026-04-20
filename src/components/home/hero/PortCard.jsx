import Image from "next/image";
import React from "react";

export const PortCard = () => {
  return (
    <div className="aspect-square rounded-[3rem] overflow-hidden tonal-shadow-sm rotate-3 hover:rotate-0 transition-transform duration-500 sm:animate-fade-in-left animate-jiggle animate-duration-2200 [animation-iteration-count:infinite]">
      <Image
        loading="eager"
        alt="Abuela feliz"
        className="w-full h-full object-cover "
        src="/family-img/Aleida-abuela.png"
        width={500}
        height={500}
      />
    </div>
  );
};
