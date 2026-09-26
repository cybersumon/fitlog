import { Workout } from "@/types/Workout"
import Image from "next/image";
import Link from "next/link";



type PlanWorkoutCardProps = {
    workout:Workout;
};

const PlanWorkoutCard = ({workout}: PlanWorkoutCardProps ) => {
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
</div>




        </li>
    );
};

export default PlanWorkoutCard;