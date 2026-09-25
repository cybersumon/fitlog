import WorkoutInstructions from "@/components/WorkoutInstructions";
import WorkoutSpecs from "@/components/WorkoutSpecs";
import { notFound } from "next/navigation";
import type { Workout } from "@/types/Workout";
import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";


type WorkoutDetailsPageProps = {
    params: Promise<{id: string}>;
};
const WorkoutDetailsPage = async ({params}: WorkoutDetailsPageProps ) => {
    const { id } = await params;
    const response = await fetch(
       `https://api.abcz.workers.dev/api/fitlog/${id}`,
        {cache:"no-store"}
    );
    if (!response.ok){
        notFound();
    }
    const workout:Workout=await response.json();
    return (
<main className="min-h-screen bg-[#141619] px-5 py-12 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* workout image */}
        <div className="relative h-80 overflow-hidden rounded-xl bg-[#1e2023] lg:h-130">
            <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
            />

        </div>
        {/* Right Side Contant  */}
        <div>
            <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((group) => (
                    <span
                    key={group}
                    className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"

                    
                    >

                        {group}

                    </span>

                ))}

            </div>

        
        <h1 className="mt-5 text-4xl font-black uppercase">{workout.name}
        </h1>
        <p className="mt-4 text-gray-400"> 
             {workout.description} 
        </p>
        <WorkoutSpecs workout={workout} />
        <WorkoutInstructions instructions={workout.instructions} />
        <WorkoutActions workoutId={workout.id}/>
    </div>
    </div>
</main>
    );
};

export default WorkoutDetailsPage;
