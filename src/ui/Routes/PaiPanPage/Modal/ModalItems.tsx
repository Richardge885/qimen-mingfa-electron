interface Props {
    selectedInfo: string;
    shen: string;
    xing: string;
    men: string;
    tianPanGan: string;
    diPanGan: string;
    baGua: string;
    updateSelectedInfo: (value: string) => void;
}

const ModalItems = ({
    selectedInfo,
    shen,
    xing,
    men,
    tianPanGan,
    diPanGan,
    baGua,
    updateSelectedInfo,
}: Props) => {
    const ModalItemsStyle =
        'w-[100%] border-b-[2px] py-3 text-center border-[#886A36]';
    const ModalItemsSelectedStyle =
        ' bg-bgdark text-red border-[#886A36] text-center';

    return (
        <div className='flex h-[100%] w-[20%] flex-col border-l-[2px] border-[#886A36] text-[3.5vw]'>
            <div
                onClick={() => {
                    updateSelectedInfo('格局');
                }}
                className={
                    ModalItemsStyle +
                    ' rounded-tr-xl' +
                    (selectedInfo === '格局' ? ModalItemsSelectedStyle : '')
                }
            >
                格局
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('神');
                }}
                className={
                    ModalItemsStyle +
                    (selectedInfo === '神' ? ModalItemsSelectedStyle : '')
                }
            >
                {shen}
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('星');
                }}
                className={
                    ModalItemsStyle +
                    (selectedInfo === '星' ? ModalItemsSelectedStyle : '')
                }
            >
                {xing}
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('门');
                }}
                className={
                    ModalItemsStyle +
                    (selectedInfo === '门' ? ModalItemsSelectedStyle : '')
                }
            >
                {men}
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('天盘干');
                }}
                className={
                    ModalItemsStyle +
                    (selectedInfo === '天盘干' ? ModalItemsSelectedStyle : '')
                }
            >
                {tianPanGan}
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('地盘干');
                }}
                className={
                    ModalItemsStyle +
                    (selectedInfo === '地盘干' ? ModalItemsSelectedStyle : '')
                }
            >
                {diPanGan}
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('卦');
                }}
                className={
                    ModalItemsStyle +
                    (selectedInfo === '卦' ? ModalItemsSelectedStyle : '')
                }
            >
                {baGua}
            </div>
            <div
                onClick={() => {
                    updateSelectedInfo('神煞');
                }}
                className={
                    'w-[100%] py-3 text-center ' +
                    (selectedInfo === '神煞'
                        ? ModalItemsSelectedStyle + ' rounded-br-xl'
                        : '')
                }
            >
                神煞
            </div>
        </div>
    );
};

export default ModalItems;
