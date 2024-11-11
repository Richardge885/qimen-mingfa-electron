import { GiHorseHead } from 'react-icons/gi';
interface Props {
    tianPanGan: string;
    diPanGan: string;
    tianPanShen: string;
    diPanShen: string;
    xing: string;
    men: string;
    anGan: string;
    anZhi: string;
    tianPanYiKon: boolean;
    diPanYiKon: boolean;
    gongKong: boolean;
    maXing: boolean;
    gongWangShuai: string;
    tianPanLiuQin: string;
    diPanLiuQin: string;
    tianPanShiShen: string;
    diPanShiShen: string;
    liuQinSettings: string;
    currentZhiShi: string;
    activeShiGan: string;
}
const WuXingColor = ({
    tianPanGan,
    diPanGan,
    tianPanShen,
    diPanShen,
    xing,
    men,
    anGan,
    anZhi,
    tianPanYiKon,
    diPanYiKon,
    gongKong,
    maXing,
    gongWangShuai,
    tianPanLiuQin,
    diPanLiuQin,
    tianPanShiShen,
    diPanShiShen,
    liuQinSettings,
    currentZhiShi,
    activeShiGan,
}: Props) => {
    const displayTianPanLiuQin =
        liuQinSettings === ''
            ? ''
            : liuQinSettings === '六亲'
              ? tianPanLiuQin
              : tianPanShiShen;
    const displayDiPanLiuQin =
        liuQinSettings === ''
            ? ''
            : liuQinSettings === '六亲'
              ? diPanLiuQin
              : diPanShiShen;

    const ZhiFuStyle =
        tianPanShen === '值符'
            ? ' bg-highlight'
            : tianPanShen === '符'
              ? ' bg-highlight'
              : '';
    const diPanZhiFuStyle =
        diPanShen === '值符'
            ? ' bg-highlight'
            : diPanShen === '符'
              ? ' bg-highlight'
              : '';
    const ZhiShiStyle = men.charAt(0) === currentZhiShi ? ' bg-highlight' : '';
    const ShiGanSytle =
        tianPanGan === activeShiGan ? ' relative bg-highlight' : ' relative';

    const tianPanShenColor = getColor(tianPanShen);
    const diPanShenColor = getColor(diPanShen);
    const xingColor = getColor(xing);
    const menColor = getColor(men);
    const tianPanGanColor = getColor(tianPanGan);
    const diPanGanColor = getColor(diPanGan);

    return (
        <>
            <span className='absolute right-[1vw] top-[1vw] text-[3.6vw]'>
                {gongKong && '〇'}
            </span>
            <span className='absolute left-[2.3vw] top-[2vw] text-[3.6vw]'>
                {maXing && <GiHorseHead />}
            </span>
            <span className='absolute bottom-[1vw] left-[2vw] text-[3.6vw]'>
                {gongWangShuai}
            </span>
            <span className={tianPanShenColor}>{tianPanShen}</span>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anGan}</div>
                <div className={xingColor + ZhiFuStyle}>{xing}</div>
                <div className={tianPanGanColor + ShiGanSytle}>
                    <span className='absolute bottom-[5.7vw] right-[0.6vw] text-[3.6vw] text-text'>
                        {displayTianPanLiuQin}
                    </span>
                    {tianPanGan}
                </div>
                <div className='absolute right-0 text-[3.6vw]'>
                    {tianPanYiKon && '◇'}
                </div>
            </div>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anZhi}</div>
                <div className={menColor + ZhiShiStyle}>{men}</div>
                <div className={diPanGanColor + ' relative'}>
                    <span className='absolute top-[5.8vw] right-[0.6vw] text-[3.6vw] text-text'>
                        {displayDiPanLiuQin}
                    </span>
                    {diPanGan}
                </div>
                <div className='absolute right-0 text-[3.6vw]'>
                    {diPanYiKon && '◇'}
                </div>
            </div>
            <span className={diPanShenColor + diPanZhiFuStyle}>
                {diPanShen}
            </span>
        </>
    );
};

const getColor = (symbol: string) => {
    if (
        symbol == '值符' ||
        symbol == '符' ||
        symbol == '六合' ||
        symbol == '合' ||
        symbol == '乙' ||
        symbol == '伤门' ||
        symbol == '伤' ||
        symbol == '杜门' ||
        symbol == '杜門' ||
        symbol == '杜' ||
        symbol == '傷門' ||
        symbol == '傷' ||
        symbol == '天辅' ||
        symbol == '辅' ||
        symbol == '天輔' ||
        symbol == '輔' ||
        symbol == '天冲' ||
        symbol == '冲' ||
        symbol == '天沖' ||
        symbol == '沖'
    ) {
        return 'text-mu';
    } else if (
        symbol == '螣蛇' ||
        symbol == '蛇' ||
        symbol == '朱雀' ||
        symbol == '雀' ||
        symbol == '丙' ||
        symbol == '丁' ||
        symbol == '景门' ||
        symbol == '景門' ||
        symbol == '景' ||
        symbol == '天英' ||
        symbol == '英'
    ) {
        return 'text-huo';
    } else if (
        symbol == '玄武' ||
        symbol == '玄' ||
        symbol == '壬' ||
        symbol == '癸' ||
        symbol == '休门' ||
        symbol == '休門' ||
        symbol == '休' ||
        symbol == '天蓬' ||
        symbol == '蓬'
    ) {
        return 'text-shui';
    } else if (
        symbol == '九天' ||
        symbol == '天' ||
        symbol == '太阴' ||
        symbol == '阴' ||
        symbol == '太陰' ||
        symbol == '陰' ||
        symbol == '白虎' ||
        symbol == '虎' ||
        symbol == '庚' ||
        symbol == '辛' ||
        symbol == '开门' ||
        symbol == '開門' ||
        symbol == '开' ||
        symbol == '開' ||
        symbol == '惊门' ||
        symbol == '惊' ||
        symbol == '驚門' ||
        symbol == '驚' ||
        symbol == '天柱' ||
        symbol == '柱' ||
        symbol == '天心' ||
        symbol == '心'
    ) {
        return 'text-jin';
    } else if (symbol == '中五' || symbol == '中') {
        return '';
    } else {
        return 'text-tu';
    }
};

export default WuXingColor;
