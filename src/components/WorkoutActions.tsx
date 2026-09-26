"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import Toast from "./Toast";

type WorkoutActionsProps = {

    workoutId: number;
    workoutName: string;
};

const WorkoutActions = ({workoutId, workoutName}:WorkoutActionsProps ) => {
    const {planIds, savedIds, addToPlan, saveWorkout} = usePlan();
    const [message, setMessage] = useState("");
    const showToast = (text:string) => {
        setMessage(text);
        window.setTimeout(() => setMessage(""), 3000);
    };

    const handleAddToPlan = () => {
        const added = addToPlan(workoutId);

        if (added){
            showToast(`${workoutName}added to today's plan`);

        }
    };
    const handleSave = () => {
        const saved = saveWorkout(workoutId);
        showToast(saved ? "Save for later" : "workout already saved");
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
            <Toast message={message} / >

        </div>
    );
};
export default WorkoutActions;