import SiZhuContainer from './SiZhuContainer';
import XunShouAndJuShu from './XunShouAndJuShu';
import FuShi from './FuShi';

interface Props {
    zhiFu: string;
    zhiShi: string;
    xunShou: string;
    timeInformation: {
        year: number;
        month: number;
        date: number;
        hour: number;
        minute: number;
        nianzhu: string;
        yuezhu: string;
        rizhu: string;
        shizhu: string;
        jieqi: string;
        dun: string;
        jushu: string;
    };
}

const index = ({ timeInformation, zhiFu, zhiShi, xunShou }: Props) => {
    let wuBuYuShi = isWuBuYuShi(
        timeInformation.rizhu.charAt(0),
        timeInformation.shizhu.charAt(0),
    );
    return (
        <div className='flex flex-col items-center justify-between w-[96%]'>
            <div className='flex flex-row items-center justify-between pb-2 pt-1 w-full text-[4.2vw]'>
                <div>
                    {timeInformation.year}年{timeInformation.month}月
                    {timeInformation.date}日{timeInformation.hour}时
                    {timeInformation.minute}分
                </div>
                <div>节气:{timeInformation.jieqi}</div>
            </div>
            <div className='flex flex-row items-center justify-between w-full'>
                <SiZhuContainer
                    nianZhu={timeInformation.nianzhu}
                    yueZhu={timeInformation.yuezhu}
                    riZhu={timeInformation.rizhu}
                    shiZhu={timeInformation.shizhu}
                />
                <div className='flex flex-col text-[4.8vw] w-1/2 leading-[8vw]'>
                    <XunShouAndJuShu
                        xunShou={xunShou}
                        dun={timeInformation.dun}
                        juShu={timeInformation.jushu}
                    />
                    <FuShi zhiFu={zhiFu} zhiShi={zhiShi} />
                    {wuBuYuShi && <div>五不遇时</div>}
                </div>
            </div>
        </div>
    );
};

function isWuBuYuShi(rigan: string, shigan: string): boolean {
    switch (shigan) {
        default: // 甲
            if (rigan == '戊') {
                return true;
            }
            break;
        case '乙':
            if (rigan == '己') {
                return true;
            }
            break;
        case '丙':
            if (rigan == '庚') {
                return true;
            }
            break;
        case '丁':
            if (rigan == '辛') {
                return true;
            }
            break;
        case '戊':
            if (rigan == '壬') {
                return true;
            }
            break;
        case '己':
            if (rigan == '癸') {
                return true;
            }
            break;
        case '庚':
            if (rigan == '甲') {
                return true;
            }
            break;
        case '辛':
            if (rigan == '乙') {
                return true;
            }
            break;
        case '壬':
            if (rigan == '丙') {
                return true;
            }
            break;
        case '癸':
            if (rigan == '丁') {
                return true;
            }
            break;
    }
    return false;
}

export default index;
