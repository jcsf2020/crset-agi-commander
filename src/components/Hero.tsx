import React from 'react';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden'>
      <div className='absolute inset-0 z-0 bg-gradient-to-tr from-[#0f0f0f] to-black opacity-60'></div>
      <div className='z-10 space-y-6'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse drop-shadow-lg'>
          Welcome to CRSET Solutions
        </h1>
        <p className='max-w-xl text-gray-400 text-lg md:text-xl'>
          Pioneering intelligent automation, data-driven strategies and quantum-level innovation.
        </p>
        <a href='#solutions' className='mt-6 inline-block px-6 py-3 border border-cyan-500 rounded-full text-cyan-300 hover:bg-cyan-500 hover:text-black transition'>
          Explore Solutions
        </a>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00f7ff33_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none z-0'></div>
    </section>
  );
};

export default Hero;
