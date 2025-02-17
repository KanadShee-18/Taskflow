"use client";

import Image from "next/image";
import React from "react";

const PageLoader = () => {
  return (
    <div className="h-full w-full pt-36 flex items-center justify-center">
      <div className="animate-pulse">
        <Image src={"/logo.jpg"} alt="TaskFlow" width={140} height={90} />
      </div>
    </div>
  );
};

export default PageLoader;
