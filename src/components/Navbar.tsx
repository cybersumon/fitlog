"use client";

import { usePlan } from '@/context/PlanContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const pathname = usePathname();
const {planIds, savedIds} = usePlan();
    const isWorkoutPage = pathname === "/" || pathname.startsWith("/workouts");
    const isMyPlanPage = pathname === "/my-plan";

    return (
        <header className="border-b border-white/10 bg-[#141619]">
            <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
                <Link href="/" className="text-lg font-bold tracking-wide text-white inline-flex items-center gap-2 ">
                <Image src={Logo} alt="FitLog Logo" width={32} height={32}/>
                    <span> FITLOG  </span> 
                </Link>
                <div className="flex items-center gap-2 text-sm">
                    <Link
                        href="/" className={`rounded-full px-4 py-2 ${isWorkoutPage
                                ? "bg-[#ccff00] text-black" : "text-gray-300 hover:text-white"
                            }`}>
                        Workout
                    </Link>
                    <Link href="/my-plan" className={`rounded-full px-4 py-2 ${isMyPlanPage
                            ? "bg-[#ccff00] text-black"
                            : "text-gray-300 hover:text-white"
                        }`}>
                        My Plan
                    </Link>
                </div>
                <div className="flex items-center gap-3 text-xs text-white">
                    <Link href="/my-plan" className="flex items-center gap-2">
                        Plan
                        <span className="rounded-full bg-[#ccff00] px-2 py-1 text-black">
                            {planIds.length}
                        </span>
                    </Link>
                    <Link href="/my-plan" className="flex items-center gap-2">
                        Saved
                        <span className="rounded-full border border-white/40 px-2 py-1 ">
                            {savedIds.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;