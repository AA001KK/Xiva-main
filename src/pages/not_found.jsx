import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative text-center p-10 bg-white shadow-md rounded-2xl max-w-lg border-2 border-main border-dashed">

        <h1 className="mt-6 text-9xl font-bold text-main">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-black">
          Sahifa topilmadi
        </h2>
        <p className="mt-2 text-lg text-desc">
          Kechirasiz, siz qidirgan sahifa mavjud emas yoki ko'chirilgan.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-main hover:bg-orange text-white text-lg font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Bosh Sahifaga Qaytish
        </Link>

        {/* Dekoratsion SVG elementlar */}
        <svg
          className="absolute z-0 -top-14 -left-10 w-40 h-40 text-main opacity-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12z"></path>
        </svg>
        <svg
          className="absolute z-0 bottom-6 -right-10 w-32 h-32 text-main opacity-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12z"></path>
        </svg>
        <svg
          className="absolute z-0 -bottom-6 -left-10 w-20 h-20 text-main opacity-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12z"></path>
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
