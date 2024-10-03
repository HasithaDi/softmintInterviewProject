import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
  
      <div className="mb-6">
 
        <div className="flex justify-center mb-4">
          <img 
            src="/img/logo.png" 
            alt="Nike Logo" 
            className="w-16"
          />
        </div>

        <div className="flex justify-center">
          <input 
            type="text" 
            placeholder="Search products" 
            className="w-full max-w-md p-2 bg-gray-200 rounded-md"
          />
        </div>

      </div>


      
      <div className="flex justify-around mb-6 text-lg">
        <span className="border-b-2 border-orange-500">Men</span>
        <span>Women</span>
        <span>Kids</span>
        <span>Gifts</span>
      </div>

      
      <div className="bg-gradient-to-r from-red-400 to-pink-300 p-6 rounded-lg mb-6 flex items-center justify-between">
        <div>
          <p className="text-black text-xl font-bold mb-2">FEEL IT <br></br>TO <br></br>BELIEVE IT</p>
          <p className=" text-orange-500 text-md">Best Seller</p>
          <p className="text-black text-lg font-semibold">Nike Air Jordan</p>
          <p className="text-white">2 Colors</p>
        </div>
        <img 
          src="/img/shoes.png" 
          alt="Nike Air Jordan" 
          className="w-32"
        />
      </div>


      {/* Latest Products */}
      <div className="mb-6">
        <p className="text-lg font-bold mb-4">Latest!</p>
        <div className="grid grid-cols-2 gap-4">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <div className="absolute top-2 left-2">
              <img src="/img/heart.png" alt="Favorite" className="w-4" />
            </div>
            <img 
              src="/img/shoes1.png" 
              alt="Nike AirForce 1" 
              className="w-32 mx-auto"
            />
            <p className="text-md font-semibold mt-2">Nike AirForce 1</p>
            <p className="text-sm text-gray-500">3 Colors</p>
            <p className="text-md font-bold">349$</p>
          </div>

          {/* Product 2 */}
          <div className="bg-gradient-to-r from-gray-100 to-purple-200 p-4 rounded-lg shadow-md relative">
            <div className="absolute top-2 left-2">
              <img src="/img/heart.png" alt="Favorite" className="w-4" />
            </div>
            <img 
              src="/img/shoes2.png" 
              alt="Nike Zoom Fly" 
              className="w-32 mx-auto"
            />
            <p className="text-md font-semibold mt-2">Nike Zoom Fly</p>
            <p className="text-sm text-gray-500">2 Colors</p>
            <p className="text-md font-bold">449$</p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around items-center">
        <span className=" bg-orange-500">
          <img src="/img/home.png" alt="Home" className="w-6" />
        </span>
        <span>
          <img src="/img/bag.png" alt="Bag" className="w-6" />
        </span>
        <span>
          <img src="/img/heart.png" alt="Favorites" className="w-6" />
        </span>
        <span>
          <img src="/img/user.png" alt="Account" className="w-6" />
        </span>
      </div>
    </div>
  );
};

export default HomePage;
