import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t border-white/10 bg-[#101113] px-5 py-6 text-white'>
            <div className='mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <Link href="/" className='font-bold'>
                <span className='text-[#ccff00]'>✦</span> 
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