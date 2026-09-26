import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className='flex flex-1 flex-col items-center justify-center bg-[#141619] px-5 text-center text-white'>
            <p className='text-lg font-bold text-[#ccff00]'> 404

            </p>

            <h1 className='mt-3 text-4xl font-black '>
                PAGE NOT FOUND


            </h1>
            <p className='mt-3 text-gray-400'>
                This Page Does Not Exist.
            </p>

            <Link
            href="/"
            className='mt-3 rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black'
            >
                Go to Workouts
            </Link>

        </main>
    );
};

export default NotFound;