import ModalItems from './ModalItems';

interface Props {
    modalState: boolean;
    displayInfo: string;

    selectedInfo: string;
    shen: string;
    xing: string;
    men: string;
    tianPanGan: string;
    diPanGan: string;
    baGua: string;
    updateSelectedInfo: (value: string) => void;
}

const ModalBox = ({
    selectedInfo,
    displayInfo,
    shen,
    xing,
    men,
    tianPanGan,
    diPanGan,
    baGua,
    updateSelectedInfo,
}: Props) => {
    return (
        <>
            <div
                className='h-auto w-4/5 overflow-scroll m-4 text-[3.8vw]'
                dangerouslySetInnerHTML={{ __html: displayInfo }}
            ></div>
            <ModalItems
                selectedInfo={selectedInfo}
                shen={shen}
                xing={xing}
                men={men}
                tianPanGan={tianPanGan}
                diPanGan={diPanGan}
                baGua={baGua}
                updateSelectedInfo={updateSelectedInfo}
            />
        </>
    );
};

export default ModalBox;
