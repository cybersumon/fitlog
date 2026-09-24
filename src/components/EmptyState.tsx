import Link from 'next/link';
import React from 'react';
type EmptyStateProps = {
    tab: "today" | "saved";

};

const EmptyState = ({tab}: EmptyStateProps) => {
    const message = tab === "today"? "Browse the library and add a lift to get today moving.": "Save workouts frrom the library to find them here latter.";

    return (
        <div className='rounded-xl border border-white/10 bg-[#1e2023] px-6 py-16 text-center'>
            <h2
            className='text-2xl font-bold text-white '>
                NOTHING HERE YET


            </h2>
            <p className="mt-3 text-gray-400 ">{message}</p>
            <Link href="/" className='mt-6 inline-block rounded-full bg-[#ccff00] px-5 py-3 font-semibold text-black '
            >
                Go to workouts 
            </Link>
        </div>
    );
};

export default EmptyState;