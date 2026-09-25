"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";

type WorkoutActionsProps = {

    workoutId: number;
};

const WorkoutActions = ({workoutId}:WorkoutActionsProps ) => {
    const {planIds, savedIds, addToPlan, saveWorkout} = usePlan();
    const [message, setMessage] = useState("");

    const handleAddToPlan = () => {
        const added = addToPlan(workoutId);

        if (added){
            setMessage("Today's plan can hold only 5 workouts");

        }
    };
    const handleSave = () => {
        const saved = saveWorkout(workoutId);
        setMessage(saved ? "Save for later" : "workout already saved");
    };

    return (
        <div className="mt-8">
            <div className="flex flex-wrap gap-3">
                <button type="button"
                onClick={handleAddToPlan}
                className="cursor-pointer rounded-full bg-[#ccff00] px-5 py-3 font-bold text-black disabled:cursor-not-allowed disabled:opacity-50" 
                disabled={planIds.includes(workoutId)}
                >
+ Add to today&apos;s plan
                </button>
<button type="button"
onClick={handleSave}
className="cursor-pointer rounded-full border border-white/30 px-5 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
disabled={savedIds.includes(workoutId)}
>
♡ Save For Later

</button>
            </div>
            {message && (
                <p role="status" className="mt-4 text-sm text-[#ccff00]">
                    {message}
                    </p>
            )}

        </div>
    );
};
export default WorkoutActions;