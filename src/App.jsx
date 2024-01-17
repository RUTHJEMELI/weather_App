import React from 'react';
import weatherAppBg from './assets/backgroun.webp';

function App() {
  return (
    <div
      className='h-screen bg-cover bg-no-repeat relative m-0 p-0'
      style={{
        backgroundImage: `url(${weatherAppBg})`,
        backgroundSize: 'cover', // or 'contain'
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-4xl font-bold">Hello</h3>
      </div>
    </div>
  );
}

export default App;
