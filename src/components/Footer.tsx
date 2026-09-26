import Image from 'next/image';
import Link from 'next/link';
import Logo from "../assets/logo.png"
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t border-white/10 bg-[#101113] px-5 py-6 text-white'>
            <div className='mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <Link href="/" className='inline-flex items-center gap-2 font-bold '>
                <span className='text-[#ccff00]'><Image src={Logo} alt="FitLog Logo" width={32} height={32}/></span> 
                FITLOG
                </Link>
                <p className='text-sm text-gray-400'>
                @ 2026 FitLog - Workout Library.Train hard,log honest.

                </p>


            </div>

        </footer>
    );
};

export default Footer;