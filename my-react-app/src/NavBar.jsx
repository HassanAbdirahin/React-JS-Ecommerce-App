import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import AmazonLogo from './assets/Amazon_logo.svg';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import data from './pages/Home/cartItems';

const NavBar = () => {
    const [cart, setCart] = useState(false);
    const [cartItems, setCartItems] = useState(data);

    function handleRemoveItem(id) {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => id !== item.id));
      }
    function handlePlaceOrder() {
        setCart(false);
        alert('Your Order has been Placed');
        setCartItems([]);
    }

    return (
        <div className="max-w-[1240px] m-auto pt-10 pe-0 py-5 flex justify-around">
            <div>
                <ul className="flex items-center gap-5">
                    <img className='w-20' src={AmazonLogo} alt="logo" />
                    <li className='pb-2'>All</li>
                    <li className='pb-2'>Products</li>
                    <li className='pb-2'>New Arrivals</li>
                </ul>
            </div>

            <div>
                <ul className="flex items-center gap-10">
                    <li className='hidden md:flex flex items-center gap-2'><button><CiSearch size={25}/></button>Search</li>
                    <li className='hidden md:flex'><button><FiUser size={23}/></button></li>
                    <li className='hidden md:flex'><button><FaRegHeart size={23}/></button></li>
                    <li onClick={() => setCart(!cart)}><button><IoCartOutline size={23}/></button></li>
                </ul>
            </div>
            
                <div className={` fixed top-0 ${cart ? 'left-0' : 'left-[-100%]'} p-2 fixed md:w-[40%] w-[70%] h-screen my-10 bg-gray-100 ease-in duration-500`}>
                    <li className="flex float-end" onClick={() => setCart(!cart)}><button><IoIosClose size={25}/></button></li>
                <ul className="flex flex-col items-end items-center gap-10">
                    <li className='text-2xl font-bold'>Cart Items:</li>
                    {cartItems.length > 0 ? 
                    cartItems.map((item) => {
                        const {id, title, img, price} = item;
                        return <li key={id} className="w-full flex justify-center gap-10 ">
                            <img className='w-24 h-24 rounded-md' src={img} alt={title} />
                            <p className="font-bold">{title}</p>
                            <div className='flex flex-col gap-5'>
                                <p className="font-bold">${price}</p>
                                <button onClick={() => handleRemoveItem(id)}>
                                <IoIosClose size={20}/>
                                </button>
                            </div>
                        </li>
                    })
                    :<li>Empty Cart</li>
                    }
                    <li><button className='bg-orange-500 px-4 py-2 rounded-md text-white' onClick={handlePlaceOrder}>PLACE ORDER</button></li>
                </ul>
                </div>

                <div className="w-full h-10 flex fixed  bottom-0 bg-white md:hidden items-center justify-around">
                <ul className="flex items-center gap-20">
                    <li><button><HiOutlineSquares2X2 size={23}/></button></li>
                    <li><button><FiUser size={23}/></button></li>
                    <li><button><FaRegHeart size={23}/></button></li>
                    <li><button><CiSearch size={25}/></button></li>
                </ul>
                </div>
        </div>
    );
};

export default NavBar;