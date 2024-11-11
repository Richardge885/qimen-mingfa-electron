import HomePageChooseMethodButton from './HomePageChooseMethodButton';
import HomePageCurrentTimeButton from './HomePageCurrentTimeButton';
import { PanJuInformation } from '../../../interfaces';

interface Props {
    openModal: () => void;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    paiPanInfo: {
        paipanMethod: string;
        time: {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
        };
        baoshuMethod: string; // 制筹, 时辰, 局数
        baoshu: number;
        ziXuanJu: string;
        additionalSettings: {
            traditionalCharacters: boolean;
            singleCharacter: boolean;
        };
    };
    updateActivePage: (page: string) => void;
}

const HomePagePaiPanButtonGroup = ({
    openModal,
    updatePanJu,
    updateActivePage,
    paiPanInfo,
}: Props) => {
    const buttonStyle =
        'py-[4vw] px-[15vw] bg-red text-bglight text-[9vw] hover:bg-bgdark hover:text-red rounded-[20px] duration-200 flex flex-col justify-center items-center';

    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <HomePageChooseMethodButton
                style={buttonStyle}
                openModal={openModal}
            />
            <HomePageCurrentTimeButton
                style={buttonStyle}
                paiPanInfo={paiPanInfo}
                updateActivePage={updateActivePage}
                updatePanJu={updatePanJu}
            />
        </div>
    );
};

export default HomePagePaiPanButtonGroup;
