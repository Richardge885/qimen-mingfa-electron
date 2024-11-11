import { PanJuInformation, GongWei } from '../../interfaces';
import InformationSection from './InformationSection';
import JiuGong from './JiuGong';
import BottomSection from './BottomSection';
import { useState } from 'react';
import Modal from './Modal';

interface Props {
    panJuInfo: PanJuInformation;
    displayHuanJu: boolean;
    enableHuanJu: () => void;
    disableHuanJu: () => void;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
}

const index = ({
    panJuInfo,
    displayHuanJu,
    disableHuanJu,
    enableHuanJu,
    updatePanJu,
}: Props) => {
    const activeShiGan = (shiZhu: string) => {
        switch (shiZhu) {
            case '甲子':
                return '戊';
            case '甲戌':
                return '己';
            case '甲申':
                return '庚';
            case '甲午':
                return '辛';
            case '甲辰':
                return '壬';
            case '甲寅':
                return '癸';
        }
        return shiZhu.charAt(0);
    };
    const [modalState, setModalState] = useState(false);
    const openModal = () => setModalState(true);
    const closeModal = () => setModalState(false);

    const [selectedGong, setSelectedGong] = useState('');
    const [selectedInfo, setSelectedInfo] = useState('格局');
    const updateSelectGong = (gong: string) => setSelectedGong(gong);
    const resetSelectedInfo = () => setSelectedInfo('格局');
    const updateSelectedInfo = (value: string) => setSelectedInfo(value);
    let gongData: GongWei;
    if (displayHuanJu) {
        switch (selectedGong) {
            case '乾':
                gongData = panJuInfo.huanJu.qianGong;
                break;
            case '坎':
                gongData = panJuInfo.huanJu.kanGong;
                break;
            case '艮':
                gongData = panJuInfo.huanJu.genGong;
                break;
            case '震':
                gongData = panJuInfo.huanJu.zhenGong;
                break;
            case '巽':
                gongData = panJuInfo.huanJu.xunGong;
                break;
            case '离':
                gongData = panJuInfo.huanJu.liGong;
                break;
            case '坤':
                gongData = panJuInfo.huanJu.kunGong;
                break;
            case '兑':
                gongData = panJuInfo.huanJu.duiGong;
                break;
            default:
                gongData = panJuInfo.huanJu.zhongGong;
                break;
        }
    } else {
        switch (selectedGong) {
            case '乾':
                gongData = panJuInfo.panJuResult.qianGong;
                break;
            case '坎':
                gongData = panJuInfo.panJuResult.kanGong;
                break;
            case '艮':
                gongData = panJuInfo.panJuResult.genGong;
                break;
            case '震':
                gongData = panJuInfo.panJuResult.zhenGong;
                break;
            case '巽':
                gongData = panJuInfo.panJuResult.xunGong;
                break;
            case '离':
                gongData = panJuInfo.panJuResult.liGong;
                break;
            case '坤':
                gongData = panJuInfo.panJuResult.kunGong;
                break;
            case '兑':
                gongData = panJuInfo.panJuResult.duiGong;
                break;
            default:
                gongData = panJuInfo.panJuResult.zhongGong;
                break;
        }
    }

    let displayInfo: string;
    switch (selectedInfo) {
        case '星':
            displayInfo = symbolInfoToHtml(gongData.symboleInfo.xing);
            break;
        case '门':
            displayInfo = symbolInfoToHtml(gongData.symboleInfo.men);
            break;
        case '神':
            displayInfo = symbolInfoToHtml(gongData.symboleInfo.shen);
            break;
        case '卦':
            displayInfo = symbolInfoToHtml(gongData.symboleInfo.gong);
            break;
        case '天盘干':
            displayInfo = symbolInfoToHtml(gongData.symboleInfo.tianPanGan);
            break;
        case '地盘干':
            displayInfo = symbolInfoToHtml(gongData.symboleInfo.diPanGan);
            break;
        case '神煞':
            displayInfo = shenShaInfoToHtml(gongData.shenSha);
            break;
        default:
            displayInfo = gejuInfoToHtml(
                gongData.tianPanGan,
                gongData.diPanGan,
                gongData.tianPanGanZhangSheng,
                gongData.diPanGanZhangSheng,
                gongData.zhengGe,
                gongData.fuGe,
            );
            break;
    }
    return (
        <div className='flex flex-col justify-center items-center gap-4 bg-bglight overflow-hidden'>
            <Modal
                handleCloseModal={closeModal}
                modalState={modalState}
                selectedInfo={selectedInfo}
                updateSelectedInfo={updateSelectedInfo}
                shen={gongData.tianPanShen}
                xing={gongData.xing}
                men={gongData.men}
                tianPanGan={gongData.tianPanGan}
                diPanGan={gongData.diPanGan}
                baGua={gongData.baGua}
                displayInfo={displayInfo}
            />
            <InformationSection
                timeInformation={panJuInfo.allTimeInformation}
                zhiFu={panJuInfo.zhiFu}
                zhiShi={panJuInfo.zhiShi}
                xunShou={panJuInfo.xunShou}
            />
            <JiuGong
                panJu={panJuInfo.panJuResult}
                huanJu={panJuInfo.huanJu}
                displayHuanJu={displayHuanJu}
                currentZhiShi={panJuInfo.zhiShi.charAt(0)}
                activeShiGan={activeShiGan(panJuInfo.allTimeInformation.shizhu)}
                openModal={openModal}
                updateSelectGong={updateSelectGong}
                resetSelectedInfo={resetSelectedInfo}
            />
            <BottomSection
                panJuInfo={panJuInfo}
                huanJuExist={
                    panJuInfo.huanJu.kanGong.tianPanGan === '' ? false : true
                }
                displayHuanJu={displayHuanJu}
                disableHuanJu={disableHuanJu}
                enableHuanJu={enableHuanJu}
                updatePanJu={updatePanJu}
                timeInfo={panJuInfo.allTimeInformation}
            />
        </div>
    );
};

function gejuInfoToHtml(
    tianPanGan: string,
    diPanGan: string,
    tianPanZhangSheng: string,
    diPanPanZhangSheng: string,
    zhengGe: string[],
    fuGe: { ganGong: string; menGong: string; xingGong: string },
): string {
    const zhangShengString =
        zhangShengToHtml(tianPanGan, tianPanZhangSheng) +
        '<br><br>' +
        zhangShengToHtml(diPanGan, diPanPanZhangSheng);
    const zhengGeString = zhengGe
        .map((item) => stringToHtml(item))
        .join('<br><br>');
    let fuGeString: string;
    if (fuGe.ganGong != '') {
        fuGeString = [
            stringToHtml(fuGe.ganGong),
            stringToHtml(fuGe.menGong),
            stringToHtml(fuGe.xingGong),
        ].join('<br><br>');
    } else {
        fuGeString = [
            stringToHtml(fuGe.menGong),
            stringToHtml(fuGe.xingGong),
        ].join('<br><br>');
    }
    return (
        zhangShengString + '<br><br>' + zhengGeString + '<br><br>' + fuGeString
    );
}

function zhangShengToHtml(tianGan: string, symbol: string): string {
    return tianGan + '在' + symbol.replace(/\n/g, `<br>${tianGan}在`);
}

function symbolInfoToHtml(symbol: string): string {
    return symbol.replace(/\n/g, '<br><br>');
}

function shenShaInfoToHtml(context: string[]): string {
    return context.map((item) => stringToHtml(item)).join('<br><br>');
}

function stringToHtml(context: string): string {
    return context.replace(/\n/g, '<br>');
}

export default index;
