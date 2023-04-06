import React from 'react';
import Navbar from '../Navbar/Navbar';
import bg from './../../assets/bg.png';
import image from './../../assets/header.png'

const Header = () => {
    return (
        <header className='bg-[length:100%_88%] h-screen bg-no-repeat' style={{
            backgroundImage: `url(${bg})`
        }}>
            <Navbar />
            <div className="flex items-center px-[105px]">
                <aside className='w-1/2'>
                    <h1 className='text-[48px] font-bold'>Let’s Grow Your <br />
                        Brand To The <br />
                        Next Level</h1>
                    <p className='text-[16px] w-1/2 mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <a href="#" className='btn-dark'>Hire Us</a>
                </aside>
                <aside className='w-1/2'>
                    <img src={image} className='w-full mx-auto' alt="" />
                </aside>
            </div>
        </header>
    );
};

export default Header;