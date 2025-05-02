import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <RingLoader size={40} color="#2563EB" />
      <span className="bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer font-semibold">
        Thinking...
      </span>
    </div>
  );
};

export default Loader;
