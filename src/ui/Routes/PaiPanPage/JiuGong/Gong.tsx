import RegularColor from './RegularColor';
import WuXingColor from './WuXingColor';

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

const Gong = ({
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
    const wuXingColor: boolean = JSON.parse(
        localStorage.getItem('qimenSettings')!,
    ).wuXingColor;

    return wuXingColor ? (
        <WuXingColor
            tianPanGan={tianPanGan}
            diPanGan={diPanGan}
            tianPanShen={tianPanShen}
            diPanShen={diPanShen}
            xing={xing}
            men={men}
            anGan={anGan}
            anZhi={anZhi}
            tianPanYiKon={tianPanYiKon}
            diPanYiKon={diPanYiKon}
            gongKong={gongKong}
            maXing={maXing}
            gongWangShuai={gongWangShuai}
            tianPanLiuQin={tianPanLiuQin}
            diPanLiuQin={diPanLiuQin}
            tianPanShiShen={tianPanShiShen}
            diPanShiShen={diPanShiShen}
            liuQinSettings={liuQinSettings}
            currentZhiShi={currentZhiShi}
            activeShiGan={activeShiGan}
        />
    ) : (
        <RegularColor
            tianPanGan={tianPanGan}
            diPanGan={diPanGan}
            tianPanShen={tianPanShen}
            diPanShen={diPanShen}
            xing={xing}
            men={men}
            anGan={anGan}
            anZhi={anZhi}
            tianPanYiKon={tianPanYiKon}
            diPanYiKon={diPanYiKon}
            gongKong={gongKong}
            maXing={maXing}
            gongWangShuai={gongWangShuai}
            tianPanLiuQin={tianPanLiuQin}
            diPanLiuQin={diPanLiuQin}
            tianPanShiShen={tianPanShiShen}
            diPanShiShen={diPanShiShen}
            liuQinSettings={liuQinSettings}
            currentZhiShi={currentZhiShi}
            activeShiGan={activeShiGan}
        />
    );
};

export default Gong;
