"use client"

import MetricCard from './MetricCard';
import React, {useEffect, useState } from 'react';
import EmptyState from './EmptyState';
import { usePlan } from '@/context/PlanContext';
import type { Workout } from '@/types/Workout';
import PlanWorkoutCard from './PlanWorkoutCard';

const PlanTabs = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const {planIds, savedIds} = usePlan();

useEffect(() => {
    const loadWorkouts = async () => {
        try{
            const response = await fetch(
               "https://api.abcz.workers.dev/api/fitlog" 
            );
            if (!response.ok){
                throw new Error("Failed to load workouts");
            }
            const data:Workout[] = await response.json();
            setWorkouts(data);
        } catch {
            setError("Could not load workouts.");
        } finally{
            setLoading(false);
        }
    };
    loadWorkouts();
},[]);
const selectedIds = activeTab === "today" ? planIds:savedIds;

const visibleWorkouts = workouts.filter((workout) => 
    selectedIds.includes(workout.id)
);

const plannedWorkouts = workouts.filter((workout) =>
planIds.includes(workout.id)
);

const totalMinuts = plannedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
);

const totalCalories = plannedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
);




    return (
        <section className='mt-10'>
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <MetricCard label="Exercises" value={plannedWorkouts.length} />
                <MetricCard label="Minuts" value={totalMinuts} />
                <MetricCard label="Calories" value={totalCalories} />

            </div>
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
            {loading ?(
               <p className="animate-pulse text-gray-400"> Loading Workouts...

               </p>
            ) : error ? (
                <p className="text-red-400">{error}</p>
            ) : visibleWorkouts.length === 0 ? (
                <EmptyState tab={activeTab} />
            ) : (
                <ul className="space-y-3">
                    {visibleWorkouts.map((workout) =>(
                   <PlanWorkoutCard key={workout.id} workout={workout} />
                    ))}


                </ul>
            )}
           
        </div>
        </section>
    );
};

export default PlanTabs;