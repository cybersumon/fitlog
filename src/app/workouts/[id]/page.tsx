type WorkoutDetailsPageProps = {
    params: Promise<{id: string}>;

};
const WorkoutDetailsPage = async ({params}: WorkoutDetailsPageProps ) => {
    const { id } = await params;

    return (
<main className="min-h-screen bg-[#141619] px-5 py-12 text-white">
    <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold"> WORKOUT DETAILS

        </h1>
        <p className="mt-4 text-gray-400 ">
            Workout ID: {id}

        </p>

    </div>


</main>

    );




};

export default WorkoutDetailsPage;
