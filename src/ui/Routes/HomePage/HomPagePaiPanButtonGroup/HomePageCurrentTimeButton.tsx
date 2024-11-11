import { paipan } from 'qimen-mingfa';
import { Link } from 'react-router-dom';
import { PanJuInformation } from '../../../interfaces';

interface Props {
    style: string;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    updateActivePage: (page: string) => void;
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
}
const HomePageCurrentTimeButton = ({
    style,
    updatePanJu,
    paiPanInfo,
    updateActivePage,
}: Props) => {
    return (
        <Link
            className={style}
            onClick={() => {
                updateActivePage('paipan');
                updatePanJu(paipan(paiPanInfo));
            }}
            to={'/paipan'}
        >
            正时
        </Link>
    );
};

export default HomePageCurrentTimeButton;
