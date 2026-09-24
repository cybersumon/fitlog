"use client"

import React, { useState } from 'react';
import EmptyState from './EmptyState';

const PlanTabs = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    return (
        <section className='mt-10'>

        <div className='flex gap-6 border-b border-white/15'>
        <button type='button' onClick={() => setActiveTab("today")}
            className={`cursor-pointer border-b-2 pb-3 ${
                activeTab === "today" ? "border-[#ccff00] text-[#ccff00]" : "border-transparent text-gray-400"
            }`}>
                Today&apos;s Plan


        </button>

        <button
        type='button' onClick={() => setActiveTab("saved")}
        className={`cursor-pointer border-b-2 pb-3 ${
            activeTab === "saved"? "border-[#ccff00]"
            : "border-transparent text-gray-400"
        }`}>
Saved
        </button>
            
        </div>
        <div className='py-8'>
            {/* {activeTab === "today"?(
                <p className='text-gray-400'>Today&apos;s Plan content goes here.
                </p>
                ):(<p className='text-gray-400'>Saved content goes here.</p>)} */}

                <EmptyState tab={activeTab} />

        </div>
        </section>
    );
};

export default PlanTabs;