
import MetricCard from '@/components/MetricCard';
import PlanTabs from '@/components/PlanTabs';
import React from 'react';

const MyPlanPage = () => {
    return (
        <main className='min-h-screen bg-[#141619] text-white'>
            <div className='mx-auto max-w-7xl px-5 py-12'>
                <h1 className='text-4xl font-bold uppercase'>
                    MY PLAN
                </h1>
                <p className='mt-3 text-gray-400'>
                    Cap of five lifts for today.Finish them,then load more.
                </p>
                <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>
                    <MetricCard label='Exercises' value={0}/>
                    <MetricCard label='Minuts' value={0}/>
                    <MetricCard label='Calories' value={0}/>


                </div>
                <PlanTabs />
            </div>
        </main>
    );
};

export default MyPlanPage;