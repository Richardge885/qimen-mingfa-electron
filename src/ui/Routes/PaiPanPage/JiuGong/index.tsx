import { JiuGongXinXi } from '../../../interfaces';
import Gong from './Gong';

interface Props {
    panJu: JiuGongXinXi;
    huanJu: JiuGongXinXi;
    displayHuanJu: boolean;
    currentZhiShi: string;
    activeShiGan: string;
    openModal: () => void;
    updateSelectGong: (gongId: string) => void;
    resetSelectedInfo: () => void;
}

const index = ({
    panJu,
    huanJu,
    displayHuanJu,
    currentZhiShi,
    activeShiGan,
    openModal,
    updateSelectGong,
    resetSelectedInfo,
}: Props) => {
    const adjustThingsInTheMiddle =
        'flex flex-col items-center justify-evenly text-text w-[32%] relative aspect-square border-collaps border-solid border-[#886A36] border-[1px]';
    const liuQinSettings = JSON.parse(
        localStorage.getItem('qimenSettings')!,
    ).displayLiuQin;

    // 宫位点击
    const handleClickGong = (id: string) => {
        updateSelectGong(id);
        resetSelectedInfo();
        openModal();
    };

    return (
        <div className='flex flex-col justify-center items-center text-[4.7vw] w-full '>
            <div className='flex flex-row justify-center items-center w-full'>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' rounded-tl-lg border-l-[2px] border-t-[2px]'
                    }
                    onClick={() => handleClickGong('巽')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.xunGong.tianPanGan
                                : panJu.xunGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.xunGong.diPanGan
                                : panJu.xunGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.xunGong.tianPanShen
                                : panJu.xunGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.xunGong.diPanShen
                                : panJu.xunGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.xunGong.xing
                                : panJu.xunGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.xunGong.men
                                : panJu.xunGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.xunGong.anGan
                                : panJu.xunGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.xunGong.anZhi
                                : panJu.xunGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.xunGong.tianPanYiKong
                                : panJu.xunGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.xunGong.diPanYiKong
                                : panJu.xunGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.xunGong.gongKong
                                : panJu.xunGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.xunGong.maXing
                                : panJu.xunGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.xunGong.gongWangShuai
                                : panJu.xunGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.xunGong.tianPanGanLiuQin
                                : panJu.xunGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.xunGong.diPanGanLiuQin
                                : panJu.xunGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.xunGong.tianPanGanShiShen
                                : panJu.xunGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.xunGong.diPanGanShiShen
                                : panJu.xunGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
                <div
                    className={adjustThingsInTheMiddle + ' border-t-[2px]'}
                    onClick={() => handleClickGong('离')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.liGong.tianPanGan
                                : panJu.liGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.liGong.diPanGan
                                : panJu.liGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.liGong.tianPanShen
                                : panJu.liGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.liGong.diPanShen
                                : panJu.liGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.liGong.xing
                                : panJu.liGong.xing
                        }
                        men={
                            displayHuanJu ? huanJu.liGong.men : panJu.liGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.liGong.anGan
                                : panJu.liGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.liGong.anZhi
                                : panJu.liGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.liGong.tianPanYiKong
                                : panJu.liGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.liGong.diPanYiKong
                                : panJu.liGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.liGong.gongKong
                                : panJu.liGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.liGong.maXing
                                : panJu.liGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.liGong.gongWangShuai
                                : panJu.liGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.liGong.tianPanGanLiuQin
                                : panJu.liGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.liGong.diPanGanLiuQin
                                : panJu.liGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.liGong.tianPanGanShiShen
                                : panJu.liGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.liGong.diPanGanShiShen
                                : panJu.liGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' rounded-tr-lg border-r-[2px] border-t-[2px]'
                    }
                    onClick={() => handleClickGong('坤')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.kunGong.tianPanGan
                                : panJu.kunGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.kunGong.diPanGan
                                : panJu.kunGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.kunGong.tianPanShen
                                : panJu.kunGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.kunGong.diPanShen
                                : panJu.kunGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.kunGong.xing
                                : panJu.kunGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.kunGong.men
                                : panJu.kunGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.kunGong.anGan
                                : panJu.kunGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.kunGong.anZhi
                                : panJu.kunGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.kunGong.tianPanYiKong
                                : panJu.kunGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.kunGong.diPanYiKong
                                : panJu.kunGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.kunGong.gongKong
                                : panJu.kunGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.kunGong.maXing
                                : panJu.kunGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.kunGong.gongWangShuai
                                : panJu.kunGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.kunGong.tianPanGanLiuQin
                                : panJu.kunGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.kunGong.diPanGanLiuQin
                                : panJu.kunGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.kunGong.tianPanGanShiShen
                                : panJu.kunGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.kunGong.diPanGanShiShen
                                : panJu.kunGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
            </div>
            <div className='flex flex-row w-full items-center justify-center'>
                <div
                    className={adjustThingsInTheMiddle + ' border-l-[2px]'}
                    onClick={() => handleClickGong('震')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.zhenGong.tianPanGan
                                : panJu.zhenGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.zhenGong.diPanGan
                                : panJu.zhenGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.zhenGong.tianPanShen
                                : panJu.zhenGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.zhenGong.diPanShen
                                : panJu.zhenGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.zhenGong.xing
                                : panJu.zhenGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.zhenGong.men
                                : panJu.zhenGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.zhenGong.anGan
                                : panJu.zhenGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.zhenGong.anZhi
                                : panJu.zhenGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.zhenGong.tianPanYiKong
                                : panJu.zhenGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.zhenGong.diPanYiKong
                                : panJu.zhenGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.zhenGong.gongKong
                                : panJu.zhenGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.zhenGong.maXing
                                : panJu.zhenGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.zhenGong.gongWangShuai
                                : panJu.zhenGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.zhenGong.tianPanGanLiuQin
                                : panJu.zhenGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.zhenGong.diPanGanLiuQin
                                : panJu.zhenGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.zhenGong.tianPanGanShiShen
                                : panJu.zhenGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.zhenGong.diPanGanShiShen
                                : panJu.zhenGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
                <div
                    className={adjustThingsInTheMiddle}
                    onClick={() => handleClickGong('中')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.zhongGong.tianPanGan
                                : panJu.zhongGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.zhongGong.diPanGan
                                : panJu.zhongGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.zhongGong.tianPanShen
                                : panJu.zhongGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.zhongGong.diPanShen
                                : panJu.zhongGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.zhongGong.xing
                                : panJu.zhongGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.zhongGong.men
                                : panJu.zhongGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.zhongGong.anGan
                                : panJu.zhongGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.zhongGong.anZhi
                                : panJu.zhongGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.zhongGong.tianPanYiKong
                                : panJu.zhongGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.zhongGong.diPanYiKong
                                : panJu.zhongGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.zhongGong.gongKong
                                : panJu.zhongGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.zhongGong.maXing
                                : panJu.zhongGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.zhongGong.gongWangShuai
                                : panJu.zhongGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.zhongGong.tianPanGanLiuQin
                                : panJu.zhongGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.zhongGong.diPanGanLiuQin
                                : panJu.zhongGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.zhongGong.tianPanGanShiShen
                                : panJu.zhongGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.zhongGong.diPanGanShiShen
                                : panJu.zhongGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
                <div
                    className={adjustThingsInTheMiddle + ' border-r-[2px]'}
                    onClick={() => handleClickGong('兑')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.duiGong.tianPanGan
                                : panJu.duiGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.duiGong.diPanGan
                                : panJu.duiGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.duiGong.tianPanShen
                                : panJu.duiGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.duiGong.diPanShen
                                : panJu.duiGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.duiGong.xing
                                : panJu.duiGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.duiGong.men
                                : panJu.duiGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.duiGong.anGan
                                : panJu.duiGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.duiGong.anZhi
                                : panJu.duiGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.duiGong.tianPanYiKong
                                : panJu.duiGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.duiGong.diPanYiKong
                                : panJu.duiGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.duiGong.gongKong
                                : panJu.duiGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.duiGong.maXing
                                : panJu.duiGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.duiGong.gongWangShuai
                                : panJu.duiGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.duiGong.tianPanGanLiuQin
                                : panJu.duiGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.duiGong.diPanGanLiuQin
                                : panJu.duiGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.duiGong.tianPanGanShiShen
                                : panJu.duiGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.duiGong.diPanGanShiShen
                                : panJu.duiGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
            </div>
            <div className='flex flex-row w-full items-center justify-center'>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' rounded-bl-lg border-b-[2px] border-l-[2px]'
                    }
                    onClick={() => handleClickGong('艮')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.genGong.tianPanGan
                                : panJu.genGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.genGong.diPanGan
                                : panJu.genGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.genGong.tianPanShen
                                : panJu.genGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.genGong.diPanShen
                                : panJu.genGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.genGong.xing
                                : panJu.genGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.genGong.men
                                : panJu.genGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.genGong.anGan
                                : panJu.genGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.genGong.anZhi
                                : panJu.genGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.genGong.tianPanYiKong
                                : panJu.genGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.genGong.diPanYiKong
                                : panJu.genGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.genGong.gongKong
                                : panJu.genGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.genGong.maXing
                                : panJu.genGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.genGong.gongWangShuai
                                : panJu.genGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.genGong.tianPanGanLiuQin
                                : panJu.genGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.genGong.diPanGanLiuQin
                                : panJu.genGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.genGong.tianPanGanShiShen
                                : panJu.genGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.genGong.diPanGanShiShen
                                : panJu.genGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
                <div
                    className={adjustThingsInTheMiddle + ' border-b-[2px]'}
                    onClick={() => handleClickGong('坎')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.kanGong.tianPanGan
                                : panJu.kanGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.kanGong.diPanGan
                                : panJu.kanGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.kanGong.tianPanShen
                                : panJu.kanGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.kanGong.diPanShen
                                : panJu.kanGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.kanGong.xing
                                : panJu.kanGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.kanGong.men
                                : panJu.kanGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.kanGong.anGan
                                : panJu.kanGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.kanGong.anZhi
                                : panJu.kanGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.kanGong.tianPanYiKong
                                : panJu.kanGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.kanGong.diPanYiKong
                                : panJu.kanGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.kanGong.gongKong
                                : panJu.kanGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.kanGong.maXing
                                : panJu.kanGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.kanGong.gongWangShuai
                                : panJu.kanGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.kanGong.tianPanGanLiuQin
                                : panJu.kanGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.kanGong.diPanGanLiuQin
                                : panJu.kanGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.kanGong.tianPanGanShiShen
                                : panJu.kanGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.kanGong.diPanGanShiShen
                                : panJu.kanGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' rounded-br-lg border-b-[2px] border-r-[2px]'
                    }
                    onClick={() => handleClickGong('乾')}
                >
                    <Gong
                        tianPanGan={
                            displayHuanJu
                                ? huanJu.qianGong.tianPanGan
                                : panJu.qianGong.tianPanGan
                        }
                        diPanGan={
                            displayHuanJu
                                ? huanJu.qianGong.diPanGan
                                : panJu.qianGong.diPanGan
                        }
                        tianPanShen={
                            displayHuanJu
                                ? huanJu.qianGong.tianPanShen
                                : panJu.qianGong.tianPanShen
                        }
                        diPanShen={
                            displayHuanJu
                                ? huanJu.qianGong.diPanShen
                                : panJu.qianGong.diPanShen
                        }
                        xing={
                            displayHuanJu
                                ? huanJu.qianGong.xing
                                : panJu.qianGong.xing
                        }
                        men={
                            displayHuanJu
                                ? huanJu.qianGong.men
                                : panJu.qianGong.men
                        }
                        anGan={
                            displayHuanJu
                                ? huanJu.qianGong.anGan
                                : panJu.qianGong.anGan
                        }
                        anZhi={
                            displayHuanJu
                                ? huanJu.qianGong.anZhi
                                : panJu.qianGong.anZhi
                        }
                        tianPanYiKon={
                            displayHuanJu
                                ? huanJu.qianGong.tianPanYiKong
                                : panJu.qianGong.tianPanYiKong
                        }
                        diPanYiKon={
                            displayHuanJu
                                ? huanJu.qianGong.diPanYiKong
                                : panJu.qianGong.diPanYiKong
                        }
                        gongKong={
                            displayHuanJu
                                ? huanJu.qianGong.gongKong
                                : panJu.qianGong.gongKong
                        }
                        maXing={
                            displayHuanJu
                                ? huanJu.qianGong.maXing
                                : panJu.qianGong.maXing
                        }
                        gongWangShuai={
                            displayHuanJu
                                ? huanJu.qianGong.gongWangShuai
                                : panJu.qianGong.gongWangShuai
                        }
                        tianPanLiuQin={
                            displayHuanJu
                                ? huanJu.qianGong.tianPanGanLiuQin
                                : panJu.qianGong.tianPanGanLiuQin
                        }
                        diPanLiuQin={
                            displayHuanJu
                                ? huanJu.qianGong.diPanGanLiuQin
                                : panJu.qianGong.diPanGanLiuQin
                        }
                        tianPanShiShen={
                            displayHuanJu
                                ? huanJu.qianGong.tianPanGanShiShen
                                : panJu.qianGong.tianPanGanShiShen
                        }
                        diPanShiShen={
                            displayHuanJu
                                ? huanJu.qianGong.diPanGanShiShen
                                : panJu.qianGong.diPanGanShiShen
                        }
                        liuQinSettings={liuQinSettings}
                        currentZhiShi={currentZhiShi}
                        activeShiGan={activeShiGan}
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
