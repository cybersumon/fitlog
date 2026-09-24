"use client"
import WorkoutCard from './WorkoutCard';
import { Workout } from '@/types/Workout';
import React, { useEffect, useState } from 'react';

const WorkoutLibrary = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadWorkouts = async () => {
            try {
                const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
                if (!response.ok) {
                    throw new Error("Workout data could not be lodad.");

                }

                const data: Workout[] = await response.json();
                setWorkouts(data);

            } catch {
                setError("Could not load workouts,Please Try again latter");
            } finally {
                setLoading(false);

            }

        };
        loadWorkouts();
    }, []);




    return (


        <section id="library" className="bg-[#141619] px-5 py-12 text-white">


            <div className='mx-auto max-w-7xl'>
                <h2 className='text-3xl font-black uppercase md:text-4xl'>
                    THE LIBRARY


                </h2>
                <p className='mt-2 text-gray-400'>
                    Twelve lifts covering every major muscle group.

                </p>
                {loading && <p className='mt-8 animate-pulse'>Loading Workouts...</p>}
                {error && <p className='mt-8 text-red-400'>{error}</p>}

                {!loading && !error && (
                    <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                        {workouts.map((workout) => (
                            <WorkoutCard key={workout.id} workout={workout} />
                        ))


                        }
                    </div>
                )}

            </div>
        </section>
    );
};

export default WorkoutLibrary;