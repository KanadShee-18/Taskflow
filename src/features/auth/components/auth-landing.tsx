"use client";

import Image from "next/image";

export const AuthClientPage = () => {
  return (
    <div className="absolute w-full h-full pt-14">
      <div className="w-1/2 aspect-square inset-0 m-auto  fixed z-[3] opacity-50 bg-gradient-to-br from-slate-800 to-indigo-950 blur-[50px] lg:blur-[150px]" />

      <Image
        src="/Images/auth/kanban.png"
        alt="Project 1"
        width={600}
        height={300}
        className=" mr-auto z-[2] m-4 pt-5 opacity-90 "
        quality={100}
        unoptimized
      />
      <Image
        src="/Images/auth/table.png"
        alt="Project 1"
        width={700}
        height={300}
        className="absolute md:-right-16 top-14 z-[2] m-4 pt-5 opacity-95 "
        quality={100}
        unoptimized
      />
      <div className="w-full flex justify-between flex-row">
        <Image
          src="/Images/auth/home.png"
          alt="Project 1"
          width={400}
          height={200}
          className="mr-auto w-auto max-w-[600px] z-[2] m-4 pt-5 "
          quality={100}
          unoptimized
        />
        <Image
          src="/Images/auth/member.png"
          alt="Project 1"
          width={400}
          height={300}
          className="z-[2] m-4 pt-5 md:w-[500px]"
          quality={100}
          unoptimized
        />
      </div>
    </div>
  );
};
