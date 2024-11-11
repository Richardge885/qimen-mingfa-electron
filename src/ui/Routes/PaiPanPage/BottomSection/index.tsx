import { FullTimeInformation, PanJuInformation } from '../../../interfaces';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { paipan } from 'qimen-mingfa';
import generateTextPanJu from './generateTextPanJu';

interface Props {
    panJuInfo: PanJuInformation;
    displayHuanJu: boolean;
    huanJuExist: boolean;
    enableHuanJu: () => void;
    disableHuanJu: () => void;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    timeInfo: FullTimeInformation;
}

const index = ({
    panJuInfo,
    huanJuExist,
    displayHuanJu,
    enableHuanJu,
    disableHuanJu,
    updatePanJu,
    timeInfo,
}: Props) => {
    function next(timeInfo: FullTimeInformation) {
        const newTime = addTime(
            timeInfo.year,
            timeInfo.month,
            timeInfo.date,
            timeInfo.hour,
        );
        const paiPanInfo = constructPaiPanInfo(timeInfo.minute, newTime);
        updatePanJu(paipan(paiPanInfo));
    }
    function prev(timeInfo: FullTimeInformation) {
        const newTime = minusTime(
            timeInfo.year,
            timeInfo.month,
            timeInfo.date,
            timeInfo.hour,
        );
        const paiPanInfo = constructPaiPanInfo(timeInfo.minute, newTime);
        updatePanJu(paipan(paiPanInfo));
    }

    return (
        <div className='flex w-[96%] flex-col items-center justify-center gap-4'>
            <input
                type='text'
                className='w-full rounded-lg border-[2px] border-[#886A36] p-2 text-xl'
            />
            <div className='flex w-full flex-row justify-between'>
                <div className='flex flex-row gap-3'>
                    <button
                        className='flex aspect-square p-2 flex-row items-center justify-center rounded-lg bg-red text-center'
                        onClick={() => {
                            disableHuanJu();
                            prev(timeInfo);
                        }}
                    >
                        <FaArrowLeft className='text-[5vw] text-bglight' />
                    </button>
                    <button
                        className='flex aspect-square p-2 flex-row items-center justify-center rounded-lg bg-red text-center'
                        onClick={() => {
                            disableHuanJu();
                            next(timeInfo);
                        }}
                    >
                        <FaArrowRight className='text-[5vw] text-bglight' />
                    </button>
                </div>
                <button
                    className='flex p-2 flex-row items-center justify-center rounded-lg bg-red text-center text-[5vw] text-bglight'
                    onClick={() => {
                        const textPanJu = generateTextPanJu(
                            panJuInfo,
                            displayHuanJu,
                        );
                        navigator.clipboard.writeText(textPanJu);
                    }}
                >
                    复制本局
                </button>
                {huanJuExist ? (
                    displayHuanJu ? (
                        <button
                            className='flex p-2 flex-row items-center justify-center rounded-lg bg-red text-center text-[5vw] text-bglight disabled:line-through'
                            onClick={() => disableHuanJu()}
                        >
                            甲时换局
                        </button>
                    ) : (
                        <button
                            className='flex p-2 flex-row items-center justify-center rounded-lg bg-red text-center text-[5vw] text-bglight disabled:line-through'
                            onClick={() => enableHuanJu()}
                        >
                            甲时换局
                        </button>
                    )
                ) : (
                    <button
                        className='flex p-2 flex-row items-center justify-center rounded-lg bg-red text-center text-[5vw] text-bglight disabled:line-through'
                        disabled
                    >
                        甲时换局
                    </button>
                )}
            </div>
        </div>
    );
};

function constructPaiPanInfo(
    minute: number,
    newTime: { year: number; month: number; date: number; hour: number },
) {
    const settings = JSON.parse(localStorage.getItem('qimenSettings')!);
    return {
        paipanMethod: '飞盘',
        time: {
            year: newTime.year,
            month: newTime.month,
            day: newTime.date,
            hour: newTime.hour,
            minute: minute,
        },
        baoshuMethod: '', // 制筹, 时辰, 局数
        baoshu: 0,
        ziXuanJu: '',
        additionalSettings: {
            traditionalCharacters: settings.traditionalChar,
            singleCharacter: settings.singleChar,
        },
    };
}

function addTime(year: number, month: number, date: number, hour: number) {
    const baseTime = new Date(year, month - 1, date, hour); // month 参数是 1-12，需要转换为 0-11 表示的月份
    baseTime.setHours(baseTime.getHours() + 2);
    if (baseTime.getHours() >= 24) {
        baseTime.setDate(baseTime.getDate() + 1);
        baseTime.setHours(baseTime.getHours() - 24);
    }

    const maxDate = new Date(year, month, 0).getDate(); // 获取月份的最大日期
    if (baseTime.getDate() > maxDate) {
        baseTime.setMonth(baseTime.getMonth() + 1);
        baseTime.setDate(1);
    }

    if (baseTime.getMonth() >= 12) {
        baseTime.setFullYear(baseTime.getFullYear() + 1);
        baseTime.setMonth(0);
    }
    return formatDateTime(baseTime);
}

// 减去一个时辰
function minusTime(year: number, month: number, date: number, hour: number) {
    const baseTime = new Date(year, month - 1, date, hour); // month 参数是 1-12，需要转换为 0-11 表示的月份
    baseTime.setHours(baseTime.getHours() - 2);
    if (baseTime.getHours() < 0) {
        baseTime.setDate(baseTime.getDate() - 1);
        baseTime.setHours(baseTime.getHours() + 24);
    }
    if (baseTime.getDate() === 0) {
        // 调整月份
        const lastMonth = new Date(
            baseTime.getFullYear(),
            baseTime.getMonth(),
            0,
        );
        baseTime.setDate(lastMonth.getDate());
        baseTime.setMonth(baseTime.getMonth() - 1);
    }

    if (baseTime.getMonth() < 0) {
        // 调整年份
        baseTime.setFullYear(baseTime.getFullYear() - 1);
        baseTime.setMonth(11); // 11 表示 12 月
    }
    return formatDateTime(baseTime);
}

function formatDateTime(dateTimeString: Date) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    return {
        year: year,
        month: month,
        date: day,
        hour: hour,
    };
}

export default index;
