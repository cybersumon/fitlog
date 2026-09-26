"use client";


import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/Workout"
import Image from "next/image";
import Link from "next/link";



type PlanWorkoutCardProps = {
    workout:Workout;
    tab:"today" | "saved";
};

const PlanWorkoutCard = ({workout, tab }: PlanWorkoutCardProps ) => {
    const { removeFromPlan, removeFromSaved, markAsDone} = usePlan();
    const handleRemove = () => {
        if (tab === "today"){
            removeFromPlan(workout.id);
        } else {
            removeFromSaved(workout.id);
        }
    };
    return (
        <li className="flex flex-col gap-5 rounded-xl border border-white/10 bg-[#1e2023] p-4 sm:flex-row">
<div className="relative h-44 w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-40">
    <Image
    src={workout.image}
    alt={workout.name}
    fill
    sizes="(max-width: 640px) 100vw, 160vw"
    className="object-cover"
    />

</div>
<div className="flex-1">
    <h3 className="text-xl font-bold uppercase text-white">
        {workout.name}

    </h3>

    <p className="mt-1 text-sm text-gray-400">
        {workout.equipment}

    </p>
    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-300">
        <span> ◷ {workout.duration} min</span>
        <span> ◉ {workout.caloriesBurned} kcal</span>
        <span> ★ {workout.rating}</span>

    </div>

    <Link 
    href={`/workouts/${workout.id}`}
    className="mt-4 inline-block rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:border-[#ccff00]"
> View Details</Link>

{tab === "today" && (
    <button
    type="button"
    onClick={() => markAsDone(workout.id)}
    className="ml-3 mt-3 cursor-pointer rounded-full bg-[#ccff00] px-4 py-2 text-sm font-semibold text-black" 
    >

      ✓  Mark as Done  

    </button>
)}

<button
type="button"
onClick={handleRemove}
aria-label={`Remove ${workout.name}`}
className="ml-3 cursor-pointer rounded-full border border-red-400/50 px-4 py-2 text-sm text-red-300"
>
X Remove
</button>


</div>




        </li>
    );
};

export default PlanWorkoutCard;