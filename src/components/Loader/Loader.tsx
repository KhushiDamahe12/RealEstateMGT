import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-[#0c3444]/30 backdrop-blur-sm z-50">
    <div className="w-16 h-16 border-8 border-t-[cadetblue] border-[#f3f3f3] rounded-full animate-spin sm:w-12 sm:h-12"></div>
  </div>
  );
};

export default Loader;
