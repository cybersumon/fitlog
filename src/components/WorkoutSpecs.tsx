import { Workout } from "@/types/Workout";

type WorkoutSpecsProps = {
    workout: Workout;
};

const WorkoutSpecs = ({ workout }: WorkoutSpecsProps) => {
    const specs = [
        { label: "EQUIPMENT", value: workout.equipment },
        { label: "DIFFICULTY", value: workout.difficulty },
        { label: "SETS", value: workout.sets },
        { label: "REPS", value: workout.reps },
        { label: "DURATION", value: workout.duration },
        { label: "CALORIES", value: workout.caloriesBurned },
        { label: "RATING", value: workout.rating },




    ];
    return (
<section className="mt-8 rounded-xl border border-white/10 bg-[#1e2023 p-6]">
<h2 className="mb-4 text-xl font-bold uppercase">
    KEY SPECS

</h2>

<dl>
    {specs.map((spec) => (
        <div 
        key={spec.label}
        className="flex justify-between gap-4 border-t border-white/10 py-3" >
            <dt className="text-sm text-gray-400"> {spec.label} </dt>
            <dd className="text-right text-sm font-semibold text-white"> {spec.value}</dd>



        </div>
    ))}
</dl>


 </section>

    );



};

export default WorkoutSpecs;


