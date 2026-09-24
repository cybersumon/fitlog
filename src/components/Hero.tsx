import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../assets/banner.png'
import React from 'react';

const Hero = () => {
    return (
        <section className='bg-[#141619] px-5 py-10 text-white'>


        <div className='mx-auto grid max-w-7xl items-center gap-10 rounded-xl bg-[#1e2023] px-6 py-12 md:grid-cols-2 md:px-12'>
            <div>

            <p className='text-sm font-bold tracking-[0.3em] text-[#ccff00]'>
                WORKOUT LIBRARY
            </p>
            <h1 className='mt-5 max-w-3xl text-5xl font-black uppercase leading-tight md:text-5xl'>
                TRAIN WITH INTENT. LOG EVERY SET.


            </h1>

            <p className='mt-6 max-w-xl text-gray-400'>
                Fitlog is a dark, no-nonsense gym companion:pick a lift,lock it
                into today&apos;s plan, and watch the week&apos;s work add up.


            </p>

            <Link href="#library" className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black'>
            BROWSE WORKOUTS <span aria-hidden="true">↗</span>
            
            </Link>

            </div>

            <div className="relative h-72 w-full md:h-96">
                <Image
                src={HeroImage} alt = "Hero Image" fill sizes='(max-width:768px) 100vw, 50vw' className="object-contain"
                priority
                />

            </div>
            
        </div>
        </section>
    );
};

export default Hero;