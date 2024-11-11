import { PanJuInformation } from './interfaces';

export function checkAndInitializeLocalStorage() {
    if (localStorage.getItem('qimenSettings') === null) {
        localStorage.setItem(
            'qimenSettings',
            JSON.stringify({
                wuXingColor: false,
                traditionalChar: false,
                singleChar: false,
                baoShuMethod: '时辰',
                displayLiuQin: '',
            }),
        );
    }
}

export function initializePanJu(): PanJuInformation {
    return {
        allTimeInformation: {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            nianzhu: '',
            yuezhu: '',
            rizhu: '',
            shizhu: '',
            jieqi: '',
            dun: '',
            jushu: '',
        },
        xunShou: '',
        zhiFu: '',
        zhiShi: '',
        huanJu: {
            kanGong: {
                baGua: '坎',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            kunGong: {
                baGua: '坤',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhenGong: {
                baGua: '震',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            xunGong: {
                baGua: '巽',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhongGong: {
                baGua: '中',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            qianGong: {
                baGua: '乾',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            duiGong: {
                baGua: '兑',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            genGong: {
                baGua: '艮',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            liGong: {
                baGua: '离',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
        },
        panJuResult: {
            kanGong: {
                baGua: '坎',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            kunGong: {
                baGua: '坤',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhenGong: {
                baGua: '震',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            xunGong: {
                baGua: '巽',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhongGong: {
                baGua: '中',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            qianGong: {
                baGua: '乾',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            duiGong: {
                baGua: '兑',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            genGong: {
                baGua: '艮',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            liGong: {
                baGua: '离',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
        },
    };
}
