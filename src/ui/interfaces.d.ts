export interface PanJuInformation {
    allTimeInformation: FullTimeInformation;
    zhiFu: string;
    zhiShi: string;
    xunShou: string;
    huanJu: JiuGongXinXi;
    panJuResult: JiuGongXinXi;
}

export interface FullTimeInformation {
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
}

export interface JiuGongXinXi {
    kanGong: GongWei;
    kunGong: GongWei;
    zhenGong: GongWei;
    xunGong: GongWei;
    zhongGong: GongWei;
    qianGong: GongWei;
    duiGong: GongWei;
    genGong: GongWei;
    liGong: GongWei;
}

export interface GongWei {
    cangTianPanJia: boolean;
    cangDiPanJia: boolean;
    tianPanGanZhangSheng: string;
    diPanGanZhangSheng: string;
    baGua: string;
    gongWangShuai: string;
    maXing: boolean;
    gongKong: boolean;
    tianPanYiKong: boolean;
    diPanYiKong: boolean;
    tianPanShen: string;
    diPanShen: string;
    xing: string;
    men: string;
    tianPanGan: string;
    diPanGan: string;
    anGan: string;
    anZhi: string;
    zhengGe: string[];
    tianPanGanLiuQin: string;
    diPanGanLiuQin: string;
    tianPanGanShiShen: string;
    diPanGanShiShen: string;
    fuGe: {
        ganGong: string;
        menGong: string;
        xingGong: string;
    };
    symboleInfo: {
        xing: string;
        men: string;
        shen: string;
        tianPanGan: string;
        diPanGan: string;
        gong: string;
    };
    shenSha: string[];
}

export interface TianPanInformation {
    tianPanShen: string;
    xing: string;
    tianPanGan: string;
    tianPanYiKong: boolean;
}
