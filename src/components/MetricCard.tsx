type MetricCardProps = {
    label:string;
    value:number;
};

const MetricCard = ({label,value}: MetricCardProps) => {
    return (
        <div className="rounded-xl border border-white/10 bg-[#1e2023] p-5">
            <p className="text-sm text-gray-400"> {label}</p>
            <p className="mt-2 text-3xl font-bold text-[#ccff00]">{value}</p>
            
        </div>
    );
};

export default MetricCard;