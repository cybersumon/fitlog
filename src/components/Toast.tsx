type ToastProps = {
    message:string;

};

const Toast = ({message}: ToastProps ) => {
    if (!message) return null;

    return (
        <div
        role = "status"
        className="fixed bottom-5 right-5 z-50 max-w-sm rounded-lg border border-[#ccff00]/40 bg-[#1e2023] px-5 py-3 text-white shadow-xl "

        >
            {message}


        </div>
    );
};

export default Toast;