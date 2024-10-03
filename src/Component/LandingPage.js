import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen w-full relative bg-black">
      {/* Background image */}
      <img 
        src="/img/background.png" 
        alt="Landing background" 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Nike Logo and Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <img 
          src="/img/logoWhite.svg" 
          alt="Nike Logo" 
          className="w-28"
        />
        <p className="text-4xl mt-5 font-bold">JUST DO IT</p>
        <button 
          onClick={goToHomePage} 
          className="mt-10 text-white px-8 py-10 text-lg">
          SHOP
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
