import React, { useEffect, useRef, useState } from 'react';
import logo from './../../assets/logo.png';
import hamburger from './../../assets/icons/hamburger.png'
import { gsap } from 'gsap';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        showNav ? gsap.fromTo(listRef.current, {
            top: '-20rem'
        }, {
            top: '62px',
            duration: 0.5
        }) : gsap.fromTo(listRef.current, {
            top: '62px'
        }, {
            top: '-20rem',
            duration: 0.5
        })
    }, [showNav])

    return (
        <nav className='flex justify-between items-center py-[20px] px-[20px] lg:px-[105px] bg-[#FBD062] z-10'>
            <aside>
                <img src={logo} className='w-8/12 lg:w-1/2' alt="" />
            </aside>
            <ul className='gap-[40px] items-center hidden lg:flex'>
                <li>Home</li>
                <li>Our Portfolio</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li>
                    <button className='bg-[#111430] px-[45px] py-[10px] text-white rounded-[5px]'>Login</button>
                </li>
            </ul>

            <div className='w-fit lg:hidden'>
                <label htmlFor="check">
                    <img src={hamburger} className='w-1/4 ml-auto' alt="hamburger" />
                    <input type="checkbox" id="check" className='hidden' onChange={e => setShowNav(e.target.checked)} />
                </label>

                <ul className='flex flex-col gap-[40px] items-center absolute w-full left-0 text-right bg-[#FBD062] top-[-20rem] py-5 z-[-1]' ref={listRef}>
                    <li>Home</li>
                    <li>Our Portfolio</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                    <li>
                        <button className='btn-dark'>Login</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;