import React from 'react';
import Laptop from '../../assets/laptop.png'

const Categories = () => {
    return (
<div>
  <div className="max-w-[1240px] m-auto flex items-center justify-between px-4 py-8">
    <h1 className='text-xl font-medium'>Shop by categories</h1>
    <h1 className='text-xl font-medium'>All Category <span className="text-gray-500">→</span></h1>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-around w-full m-auto gap-10 px-10">
    <div className='card-container'>
      <div className='bg-gray-100'>
        <img className='w-80 p-5 lg:h-72 h-50 ' src="https://dysruptbeauty.com/cdn/shop/files/DYSRUPT-OLDMONEYFRAGRANCEDBODYLOTION.png?v=1698439450&width=2125" alt="img" />
        <h1 className="font-bold ps-8 py-4 text-xl">Beauty picks</h1>
      </div>
    </div>
    <div className='card-container'>
      <div className='bg-gray-100'>
        <img className='w-80 p-5 lg:h-72 h-50' src={Laptop} alt="img" />
        <h1 className="font-bold ps-8 py-4 text-xl">Tech gadgets</h1>
      </div>
    </div>
    <div className='card-container'>
      <div className='bg-gray-100'>
        <img className='w-80 p-5 lg:h-72 h-50' src='https://static.vecteezy.com/system/resources/previews/024/724/520/non_2x/virtual-reality-or-vr-headset-isolated-on-transparent-background-vr-glasses-for-360-environment-games-or-simulation-training-generative-ai-free-png.png' alt="img" />
        <h1 className="font-bold ps-8 py-4 text-xl">Virtual Reality</h1>
      </div>
    </div>
    <div className='card-container'>
      <div className='bg-gray-100'>
        <img className='w-80 p-5 lg:h-72 h-50' src='https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-bear-teddy-toy-png-image_10149481.png' alt="img" />
        <h1 className="font-bold ps-8 py-4 text-xl">Toys & Games</h1>
      </div>
    </div>
  </div>
</div>

    );
};

export default Categories;