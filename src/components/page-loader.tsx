'use client';

import Image from 'next/image';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center">
      <div className="animate-pulse">
        <Image src={'/logo.jpg'} alt="TaskFlow" width={140} height={90} />
      </div>
    </div>
  );
};

export default PageLoader;
