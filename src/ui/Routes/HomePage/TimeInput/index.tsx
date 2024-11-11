import { FaArrowRotateLeft } from 'react-icons/fa6';
import { useEffect } from 'react';

interface Props {
    updateYear: (updateNumber: number) => void;
    updateMonth: (updateNumber: number) => void;
    updateDay: (updateNumber: number) => void;
    updateHour: (updateNumber: number) => void;
    updateMinute: (updateNumber: number) => void;
    getCurrentTimeForInputTag: () => string;
    setInputTime: (time: string) => void;
    inputTime: string;
}

const TimeInput = ({
    updateYear,
    updateMonth,
    updateDay,
    updateHour,
    updateMinute,
    getCurrentTimeForInputTag,
    setInputTime,
    inputTime,
}: Props) => {
    const handleBackToCurrentTime = () => {
        const currentTime = getCurrentTimeForInputTag();
        setInputTime(currentTime);
    };

    // Function to update year, month, day, hour, and minute
    const updateTimeValues = (timeString: string) => {
        const [datePart, timePart] = timeString.split('T');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hour, minute] = timePart.split(':').map(Number);

        updateYear(year);
        updateMonth(month);
        updateDay(day);
        updateHour(hour);
        updateMinute(minute);
    };

    // Update values whenever inputTime changes
    useEffect(() => {
        updateTimeValues(inputTime);
    }, [inputTime]);

    return (
        <>
            <div className='flex flex-row items-center justify-center gap-1'>
                <input
                    type='datetime-local'
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                    className='w-[80%] h-12 rounded-[10px] border-[1px] border-solid border-red bg-bgdark text-[4vw]'
                />
                <button
                    onClick={handleBackToCurrentTime}
                    className='aspect-square w-12 rounded-xl bg-red text-center text-2xl text-bglight transition-all duration-150 hover:bg-bgdark hover:text-red'
                >
                    <FaArrowRotateLeft className='m-auto' />
                </button>
            </div>
        </>
    );
};

export default TimeInput;
