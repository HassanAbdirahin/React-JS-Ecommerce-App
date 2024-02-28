import React from 'react';
import Owner from '../../assets/owner.png'
import crate from '../../assets/crate.png'

const FeaturedProducts = () => {
    return (
        <div className='bg-orange-50 px-4 py-8 m-8'>
            <div className="max-w-[1240px] m-auto flex items-center justify-around md:text-left text-center gap-10">
                <div className="flex items-center gap-2 justify-between">
                    <img className='w-20' src={Owner} alt="img" />
                    <p className='text-gray-500'>Hi, I am <span className="font-bold text-gray-800">Tim Cook</span>, here to help you</p>
                </div>
                <div className="items-center gap-2 justify-between sm:flex hidden">
                    <img className='w-20' src={crate} alt="img" />
                    <p className='text-gray-500'><span className="font-bold text-gray-800">Your Orders</span>, Fast & Easy</p>
                </div>
                <div className="md:flex items-center gap-2 justify-between hidden">
                    <img className='w-20' src='https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha' alt="img" />
                    <p className='text-gray-500'><span className="font-bold text-gray-800">Electronics</span>, Buy them now</p>
                </div>
                <div className="md:flex items-center gap-2 justify-between hidden">
                    <img className='w-20' src='https://www.kutchina.com/wp-content/uploads/2020/08/600x600_RIZE-ECO-1.8L-600x600.png' alt="img" />
                    <p className='text-gray-500'><span className="font-bold text-gray-800">Home & Kitchen</span> Big Sale 30%</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;