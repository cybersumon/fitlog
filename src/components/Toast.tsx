type ToastProps = {
    message:string;

};

const Toast = ({message}: ToastProps ) => {
    if (!message) return null;

    return (
        <div
        role = "status"
        className="toast-enter fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] items-center gap-3 rounded-xl border border-[#ccff00]/30 bg-[#252a24] px-5 py-4 text-sm font-medium text-white shadow-2xl shadow-black/40 "


        >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                ✓

            </span>
            <span>
                {message}
                </span>


        </div>
    );
};

export default Toast;