import React from "react";

export const ThreePoints = () => {
  return (
    <span className="absolute flex justify-center items-center w-full animate-fade-in inset-0 gap-4">
      <div className="size-2 md:size-4 border-2 rounded-full bg-on-secondary-fixed-variant border-on-surface-variant animate-bounce" />
      <div
        className="size-2 md:size-4 border-2 rounded-full
        bg-on-secondary-fixed-variant
         border-on-surface-variant animate-bounce "
      />
      <div
        className="size-2 md:size-4 border-2 rounded-full
        bg-on-secondary-fixed-variant border-on-surface-variant animate-bounce"
      />
    </span>
  );
};
