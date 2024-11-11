interface Props {
    nianZhu: string;
    yueZhu: string;
    riZhu: string;
    shiZhu: string;
}
const index = ({ nianZhu, yueZhu, riZhu, shiZhu }: Props) => {
    const wuXingColor: boolean = JSON.parse(
        localStorage.getItem('qimenSettings')!,
    ).wuXingColor;
    const nianGanColor = getColor(nianZhu.charAt(0));
    const nianZhiColor = getColor(nianZhu.charAt(1));
    const yueGanColor = getColor(yueZhu.charAt(0));
    const yueZhiColor = getColor(yueZhu.charAt(1));
    const riGanColor = getColor(riZhu.charAt(0));
    const riZhiColor = getColor(riZhu.charAt(1));
    const shiGanColor = getColor(shiZhu.charAt(0));
    const shiZhiColor = getColor(shiZhu.charAt(1));

    return (
        <div className='flex flex-col text-[5.5vw] w-[45%] aspect-video items-center border-2 border-[#886A36] rounded-[10px]'>
            <div className='flex flex-row items-center justify-evenly border-b-2 border-[#886A36] w-full'>
                <div className='text-center w-1/4 h-full py-[1vw]'>年</div>

                <div className='text-center w-1/4 border-r-2 border-l-2 border-[#886A36] h-full py-[1vw]'>
                    月
                </div>

                <div className='text-center w-1/4 border-r-2 border-[#886A36] h-full py-[1vw]'>
                    日
                </div>

                <div className='text-center w-1/4'>时</div>
            </div>

            <div className='flex flex-row items-center justify-evenly w-full leading-[7vw]'>
                <div className='text-center w-1/4 py-[1vw]'>
                    <span className={wuXingColor ? nianGanColor : ''}>
                        {nianZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? nianZhiColor : ''}>
                        {nianZhu.charAt(1)}
                    </span>
                </div>
                <div className='text-center w-1/4 border-r-2 border-l-2 border-[#886A36] py-[1vw]'>
                    <span className={wuXingColor ? yueGanColor : ''}>
                        {yueZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? yueZhiColor : ''}>
                        {yueZhu.charAt(1)}
                    </span>
                </div>
                <div className='text-center w-1/4 border-r-2 border-[#886A36] py-[1vw]'>
                    <span className={wuXingColor ? riGanColor : ''}>
                        {riZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? riZhiColor : ''}>
                        {riZhu.charAt(1)}
                    </span>
                </div>
                <div className='text-center w-1/4 py-[1vw]'>
                    <span className={wuXingColor ? shiGanColor : ''}>
                        {shiZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? shiZhiColor : ''}>
                        {shiZhu.charAt(1)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const getColor = (symbol: string) => {
    if (symbol == '甲' || symbol == '乙' || symbol == '寅' || symbol == '卯') {
        return 'text-mu';
    } else if (
        symbol == '丙' ||
        symbol == '丁' ||
        symbol == '巳' ||
        symbol == '午'
    ) {
        return 'text-huo';
    } else if (
        symbol == '壬' ||
        symbol == '癸' ||
        symbol == '亥' ||
        symbol == '子'
    ) {
        return 'text-shui';
    } else if (
        symbol == '庚' ||
        symbol == '辛' ||
        symbol == '申' ||
        symbol == '酉'
    ) {
        return 'text-jin';
    } else {
        return 'text-tu';
    }
};

export default index;
