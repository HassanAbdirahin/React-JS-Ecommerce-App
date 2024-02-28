import React from 'react';
import HeroImg from '../../assets/hero-img.png';

const Hero = () => {
    return (
        <div className='bg-gray-100'>
            <div className="container max-w-[1240px] m-auto flex flex-col md:flex-row flex-col-reverse items-center gap-32">
                <div className='md:w-[50%] w-[70%] md:text-right text-center'>
                    <h1 className='text-5xl font-bold py-5'>SHOP COMPUTERS  & ACCESSORIES</h1>
                    <p className='md:ms-12 md:text-right text-center py-5 md:py-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam voluptatem molestias dolorum quis esse veritatis maiores ipsum odit. Eveniet!</p>
                    <button className='border-2 border-gray-500 rounded-md px-6 py-1 md:m-5 mb-4'>Shop Now</button>
                </div>
                <div>
                    <img className='w-[640px]' src={HeroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;