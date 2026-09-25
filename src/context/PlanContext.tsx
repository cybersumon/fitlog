"use client";


import {createContext, useContext, useState} from "react";
import type { ReactNode } from "react";

type PlanContextType = {
planIds: number[];
savedIds: number[];
addToPlan: (id:number) => boolean;
saveWorkout: (id: number) => boolean;

};
const PlanContext = createContext<PlanContextType | null> (null);

export const PlanProvider = ({children}: {children: ReactNode}) => {
    const [planIds, setPlanIds] = useState<number[]>([]);
    const [savedIds, setSavedIds] = useState<number[]>([]);

    const addToPlan = (id:number) => {
if (planIds.includes(id) || planIds.length >= 5) return false;

setPlanIds((current) => [...current, id]);
return true;
    };

const saveWorkout = (id: number) => {
    if (savedIds.includes(id)) return false;

    setSavedIds((current) =>  [...current, id]);
    return true;
};


return (
<PlanContext.Provider
value={{planIds,savedIds,addToPlan,saveWorkout}}>
{children}


</PlanContext.Provider>
);

};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
throw new Error("usePlan must be used inside Plan Provider");


    }
    return context;
}