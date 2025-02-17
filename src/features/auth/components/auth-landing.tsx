"use client";

import Image from "next/image";

export const AuthClientPage = () => {
  return (
    <div className="absolute w-full h-full">
      <Image
        src="/Images/project-kanban.png"
        alt="Project 1"
        width={500}
        height={300}
        className="w-11/12 mx-auto z-[2] m-4 pt-5 -rotate-1 opacity-60 blur-[0.5px]"
        quality={100}
        unoptimized
      />

      <div className="w-full h-full fixed top-0 left-0 opacity-50 bg-gradient-to-tr from-indigo-950 to-transparent" />
    </div>
  );
};
