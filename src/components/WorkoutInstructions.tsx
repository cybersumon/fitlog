type WorkoutInstructionsProps = {
    instructions: string[];
};

const WorkoutInstructions = ({
    instructions,

}: WorkoutInstructionsProps ) => {
    return (
        <section className="mt-8">
            <h2 className="text-xl font-bold uppercase text-white">
                INSTRUCTIONS

            </h2>
<ol className="mt-4 space-y-4">
    {instructions.map((instruction, index) => (
<li key={index} className="flex gap-4 text-gray-300">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
        {index + 1}


    </span>
    <p className="pt-1">
        {instruction}


    </p>




</li>

    ))}


</ol>



        </section>
    );
};

export default WorkoutInstructions;