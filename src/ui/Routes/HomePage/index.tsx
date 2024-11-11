import HomePagePaiPanButtonGroup from './HomPagePaiPanButtonGroup';
import TimeInput from './TimeInput';
import Modal from './Modal';
import { PanJuInformation } from '../../interfaces';
import { useState } from 'react';
import HomePageSelectionInput from './HomePageSelectionInput';

interface Props {
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    updateActivePage: (page: string) => void;
    getCurrentTimeForInputTag: () => string;
    setInputTime: (time: string) => void;
    inputTime: string;
}

/**
 * paipanMethod = "飞盘",
 * time = {
 *      year: number
 *      month: number
 *      day: number
 *      hour: number
 *      minute: number
 * },
 * baoshuMethod = "", // 制筹, 时辰, 局数
 * baoshu = 0,
 * chaiBu = true,
 * ziXuanJu = "",
 * additionalSettings = {
 *      traditionalCharacters: boolean;
 *      singleCharacter: boolean;
 * },
 * 如果baoshuMethod = '' 和 baoshu == 0 则使用 ziXuanJu
 */

const HomePage = ({
    updatePanJu,
    updateActivePage,
    getCurrentTimeForInputTag,
    setInputTime,
    inputTime,
}: Props) => {
    const settings = JSON.parse(localStorage.getItem('qimenSettings')!);
    const [modalState, setModalState] = useState(false);

    const [ziXuanJu, setZiXuanJu] = useState('');
    const [baoShuMethod, setBaoShuMethod] = useState(settings.baoShuMethod); // Needs update with localstorage
    const [baoShu, setBaoShu] = useState(0);

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);

    const openModal = () => setModalState(true);
    const closeModal = () => setModalState(false);

    const updateYear = (updateNumber: number) => setYear(updateNumber);
    const updateMonth = (updateNumber: number) => setMonth(updateNumber);
    const updateDay = (updateNumber: number) => setDay(updateNumber);
    const updateHour = (updateNumber: number) => setHour(updateNumber);
    const updateMinute = (updateNumber: number) => setMinute(updateNumber);
    const updateZiXuanJu = (updateZiXuanJu: string) => {
        setZiXuanJu(updateZiXuanJu);
    };
    const updateBaoShuMethod = (method: string) => {
        settings.baoShuMethod = method;
        localStorage.setItem('qimenSettings', JSON.stringify(settings));
        setBaoShuMethod(method);
    };
    const updateBaoShuNumber = (baoshu: number) => {
        setBaoShu(baoshu);
    };

    const paiPanInfo = {
        paipanMethod: '飞盘',
        time: {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
        },
        baoshuMethod: baoShuMethod, // 制筹, 时辰, 局数
        baoshu: baoShu,
        ziXuanJu: ziXuanJu,
        additionalSettings: {
            traditionalCharacters: settings.traditionalChar,
            singleCharacter: settings.singleChar,
        },
    };

    return (
        <div className='flex flex-col items-center justify-center gap-[10vw]'>
            <Modal
                modalState={modalState}
                handleCloseModal={closeModal}
                paiPanInfo={paiPanInfo}
                updatePanJu={updatePanJu}
                updateActivePage={updateActivePage}
                updateBaoShuMethod={updateBaoShuMethod}
                updateBaoShuNumber={updateBaoShuNumber}
            />
            <div className='flex flex-col justify-center gap-[10vw] items-center w-full'>
                <div className='font-lishu text-[26vw] text-red pt-[4vw]'>
                    鸣法
                </div>
                <TimeInput
                    updateYear={updateYear}
                    updateMonth={updateMonth}
                    updateDay={updateDay}
                    updateHour={updateHour}
                    updateMinute={updateMinute}
                    getCurrentTimeForInputTag={getCurrentTimeForInputTag}
                    setInputTime={setInputTime}
                    inputTime={inputTime}
                />
                <HomePageSelectionInput updateZiXuanJu={updateZiXuanJu} />
            </div>
            <HomePagePaiPanButtonGroup
                openModal={openModal}
                paiPanInfo={paiPanInfo}
                updatePanJu={updatePanJu}
                updateActivePage={updateActivePage}
            />
        </div>
    );
};

export default HomePage;
