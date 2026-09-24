import { Workout } from '@/types/Workout';
import Image from 'next/image';
import Link from 'next/link';

type WorkoutCardProps = {
    workout: Workout;

}

const WorkoutCard = ({workout}: WorkoutCardProps ) => {
    return (

        <Link href={`/workouts/${workout.id}`} className='block'>

        
<article className="rounded-xl border border-white/10 bg-[#1e2023] p-5">
<div className="relative mb-4 h-52 w-full overflow-hidden rounded-lg">
    <Image
    src={workout.image}
    alt={workout.name}
    fill
    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw,33vw"
    className="object-cover"
    />


</div>
<div className="flex flex-wrap gap-2">
    {workout.muscleGroups.map((group) => (
        <span 
        key={group}
        className="rounded-full bg-[#ccff00] px-2 py-1 text-xs font-bold uppercase text-black"
        >
            {group}

        </span>
    ))

    }

</div>
<h3 className="mt-4 text-xl font-bold uppercase text-white">
    {workout.name}

</h3>
<p className="mt-1 text-sm text-gray-400 "> {workout.equipment}

</p>
<div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm text-gray-300">
<span>* {workout.duration} min </span>
<span>* {workout.caloriesBurned} kcal </span>
<span>* {workout.rating} </span>



</div>

</article>
</Link>

    )
};

export default WorkoutCard;