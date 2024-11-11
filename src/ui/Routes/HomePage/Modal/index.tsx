import { PanJuInformation } from '../../../interfaces';
import ModalBox from './ModalBox';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    modalState: boolean;
    handleCloseModal: () => void;
    updateActivePage: (page: string) => void;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    updateBaoShuMethod: (method: string) => void;
    updateBaoShuNumber: (baoshu: number) => void;
    paiPanInfo: {
        paipanMethod: string;
        time: {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
        };
        baoshuMethod: string; // 制筹, 时辰, 局数
        baoshu: number;
        ziXuanJu: string;
        additionalSettings: {
            traditionalCharacters: boolean;
            singleCharacter: boolean;
        };
    };
}

const Modal = ({
    modalState,
    handleCloseModal,
    updateActivePage,
    updateBaoShuMethod,
    updateBaoShuNumber,
    updatePanJu,
    paiPanInfo,
}: Props) => {
    return (
        <>
            <AnimatePresence>
                {modalState && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }} // Start fully transparent
                            animate={{ opacity: 1, scale: 1 }} // Fade in to full opacity
                            exit={{ opacity: 0, scale: 0.5 }} // Fade out to full transparency
                            transition={{ duration: 0.3 }} // Adjust duration as desired
                            className='absolute flex aspect-square w-[16rem] m:w-[18rem] sm:w-[20rem] flex-col items-center justify-center rounded-[15px] bg-bglight z-20 top-0 bottom-0 left-0 right-0 m-auto gap-5 m:gap-10 sm:gap-14'
                        >
                            <ModalBox
                                updateActivePage={updateActivePage}
                                modalState={modalState}
                                paiPanInfo={paiPanInfo}
                                updatePanJu={updatePanJu}
                                updateBaoShuMethod={updateBaoShuMethod}
                                updateBaoShuNumber={updateBaoShuNumber}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }} // Start fully transparent
                            animate={{ opacity: 1 }} // Fade in to full opacity
                            exit={{ opacity: 0 }} // Fade out to full transparency
                            transition={{ duration: 0.2 }} // Adjust duration as desired
                            className='absolute h-screen w-screen bg-black/[40%] z-10 top-0 bottom-0 left-0 right-0 m-auto'
                            onClick={handleCloseModal}
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modal;
