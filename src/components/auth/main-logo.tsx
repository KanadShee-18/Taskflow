"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={"/logo.jpg"} alt="TaskFlow" width={50} height={60} />
      <Image src={"/logo-text.png"} alt="TaskFlow" width={90} height={70} />
    </div>
  );
};

export default Logo;
