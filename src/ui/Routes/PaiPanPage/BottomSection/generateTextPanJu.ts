import { PanJuInformation } from '../../../interfaces';
export default function generateTextPanJu(
    panJuInfo: PanJuInformation,
    displayHuanJu: boolean,
): string {
    const space = '    ';
    const panJuInformation = `公历：${panJuInfo.allTimeInformation.year}年${panJuInfo.allTimeInformation.month}月${panJuInfo.allTimeInformation.date}日${panJuInfo.allTimeInformation.hour}时${panJuInfo.allTimeInformation.minute}分  节气：${panJuInfo.allTimeInformation.jieqi}
四柱：${panJuInfo.allTimeInformation.nianzhu}年  ${panJuInfo.allTimeInformation.yuezhu}月  ${panJuInfo.allTimeInformation.rizhu}日  ${panJuInfo.allTimeInformation.shizhu}时
局数：${panJuInfo.allTimeInformation.dun}${panJuInfo.allTimeInformation.jushu}局  旬首：${panJuInfo.xunShou}
直符：${panJuInfo.zhiFu}  值使：${panJuInfo.zhiShi}`;
    const p = displayHuanJu ? panJuInfo.huanJu : panJuInfo.panJuResult;
    const topBorder =
        panJuInfo.panJuResult.kunGong.tianPanShen.length === 1
            ? '┌──────┬──────┬──────┐'
            : '┌───────┬───────┬───────┐';
    const middleBorder =
        panJuInfo.panJuResult.kunGong.tianPanShen.length === 1
            ? '├──────┼──────┼──────┤'
            : '├───────┼───────┼───────┤';
    const bottomBorder =
        panJuInfo.panJuResult.kunGong.tianPanShen.length === 1
            ? '└──────┴──────┴──────┘'
            : '└───────┴───────┴───────┘';
    const leftOfShen = '│        ';

    return `${panJuInformation}
${topBorder}
${leftOfShen}${p.xunGong.tianPanShen}${rightOfShen(p.xunGong.gongKong, p.xunGong.maXing)}${leftOfShen}${p.liGong.tianPanShen}${rightOfShen(p.liGong.gongKong, false)}${leftOfShen}${p.kunGong.tianPanShen}${rightOfShen(p.kunGong.gongKong, p.kunGong.maXing)}│
│${p.xunGong.anZhi}${space}${p.xunGong.xing}${space}${p.xunGong.tianPanGan}${yiKong(p.xunGong.tianPanYiKong)}│${p.liGong.anZhi}${space}${p.liGong.xing}${space}${p.liGong.tianPanGan}${yiKong(p.liGong.tianPanYiKong)}│${p.kunGong.anGan}${space}${p.kunGong.xing}${space}${p.kunGong.tianPanGan}${yiKong(p.kunGong.tianPanYiKong)}│
│${p.xunGong.anGan}${space}${p.xunGong.men}${space}${p.xunGong.diPanGan}${yiKong(p.xunGong.diPanYiKong)}│${p.liGong.anGan}${space}${p.liGong.men}${space}${p.liGong.diPanGan}${yiKong(p.liGong.diPanYiKong)}│${p.kunGong.anZhi}${space}${p.kunGong.men}${space}${p.kunGong.diPanGan}${yiKong(p.kunGong.tianPanYiKong)}│
${leftOfShen}${p.xunGong.diPanShen}        ${p.xunGong.gongWangShuai}${leftOfShen}${p.liGong.diPanShen}        ${p.liGong.gongWangShuai}${leftOfShen}${p.kunGong.diPanShen}        ${p.kunGong.gongWangShuai}│
${middleBorder}
${leftOfShen}${p.zhenGong.tianPanShen}${rightOfShen(p.zhenGong.gongKong, false)}${leftOfShen}${p.zhongGong.tianPanShen}${rightOfShen(false, false)}${leftOfShen}${p.duiGong.tianPanShen}${rightOfShen(p.duiGong.gongKong, false)}│
│${p.zhenGong.anZhi}${space}${p.zhenGong.xing}${space}${p.zhenGong.tianPanGan}${yiKong(p.zhenGong.tianPanYiKong)}│${p.zhongGong.anZhi}${space}${p.zhongGong.xing}${space}${p.zhongGong.tianPanGan}${yiKong(p.zhongGong.tianPanYiKong)}│${p.duiGong.anGan}${space}${p.duiGong.xing}${space}${p.duiGong.tianPanGan}${yiKong(p.duiGong.tianPanYiKong)}│
│${p.zhenGong.anGan}${space}${p.zhenGong.men}${space}${p.zhenGong.diPanGan}${yiKong(p.zhenGong.diPanYiKong)}│${p.zhongGong.anGan}${space}${p.zhongGong.men}${space}${p.zhongGong.diPanGan}${yiKong(p.zhongGong.diPanYiKong)}│${p.duiGong.anZhi}${space}${p.duiGong.men}${space}${p.duiGong.diPanGan}${yiKong(p.duiGong.tianPanYiKong)}│
${leftOfShen}${p.zhenGong.diPanShen}        ${p.zhenGong.gongWangShuai}${leftOfShen}${p.zhongGong.diPanShen}        ${p.zhongGong.gongWangShuai}${leftOfShen}${p.duiGong.diPanShen}        ${p.duiGong.gongWangShuai}│
${middleBorder}
${leftOfShen}${p.genGong.tianPanShen}${rightOfShen(p.genGong.gongKong, p.genGong.maXing)}${leftOfShen}${p.kanGong.tianPanShen}${rightOfShen(p.kanGong.gongKong, false)}${leftOfShen}${p.qianGong.tianPanShen}${rightOfShen(p.qianGong.gongKong, p.qianGong.maXing)}│
│${p.genGong.anZhi}${space}${p.genGong.xing}${space}${p.genGong.tianPanGan}${yiKong(p.genGong.tianPanYiKong)}│${p.kanGong.anZhi}${space}${p.kanGong.xing}${space}${p.kanGong.tianPanGan}${yiKong(p.kanGong.tianPanYiKong)}│${p.qianGong.anGan}${space}${p.qianGong.xing}${space}${p.qianGong.tianPanGan}${yiKong(p.qianGong.tianPanYiKong)}│
│${p.genGong.anGan}${space}${p.genGong.men}${space}${p.genGong.diPanGan}${yiKong(p.genGong.diPanYiKong)}│${p.kanGong.anGan}${space}${p.kanGong.men}${space}${p.kanGong.diPanGan}${yiKong(p.kanGong.diPanYiKong)}│${p.qianGong.anZhi}${space}${p.qianGong.men}${space}${p.qianGong.diPanGan}${yiKong(p.qianGong.tianPanYiKong)}│
${leftOfShen}${p.genGong.diPanShen}        ${p.genGong.gongWangShuai}${leftOfShen}${p.kanGong.diPanShen}        ${p.kanGong.gongWangShuai}${leftOfShen}${p.qianGong.diPanShen}        ${p.qianGong.gongWangShuai}│
${bottomBorder}`;
}

function yiKong(yiKong: boolean): string {
    if (yiKong) {
        return '◇';
    } else {
        return '    ';
    }
}

function rightOfShen(gongKong: boolean, maXing: boolean): string {
    if (gongKong && maXing) {
        return '○    马';
    } else if (gongKong) {
        return '○        ';
    } else if (maXing) {
        return '        马';
    } else {
        return '            ';
    }
}
