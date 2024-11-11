import { motion, AnimatePresence } from 'framer-motion';
import ModalBox from './ModalBox';

interface Props {
    handleCloseModal: () => void;
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

const Modal = ({
    modalState,
    handleCloseModal,
    selectedInfo,
    updateSelectedInfo,
    shen,
    xing,
    men,
    tianPanGan,
    diPanGan,
    baGua,

    displayInfo,
}: Props) => {
    return (
        <AnimatePresence>
            {modalState && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.5 }} // Start fully transparent
                        animate={{ opacity: 1, scale: 1 }} // Fade in to full opacity
                        exit={{ opacity: 0, scale: 0.5 }} // Fade out to full transparency
                        transition={{ duration: 0.3 }} // Adjust duration as desired
                        className='absolute top-0 bottom-0 left-0 right-0 m-auto flex w-[80%] h-[50%] flex-row justify-center rounded-[15px] bg-bglight z-20 '
                    >
                        <ModalBox
                            modalState={modalState}
                            selectedInfo={selectedInfo}
                            displayInfo={displayInfo}
                            shen={shen}
                            xing={xing}
                            men={men}
                            tianPanGan={tianPanGan}
                            diPanGan={diPanGan}
                            baGua={baGua}
                            updateSelectedInfo={updateSelectedInfo}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }} // Start fully transparent
                        animate={{ opacity: 1 }} // Fade in to full opacity
                        exit={{ opacity: 0 }} // Fade out to full transparency
                        transition={{ duration: 0.2 }} // Adjust duration as desired
                        className='absolute h-screen w-screen bg-black/[40%] z-10 top-0 bottom-0 left-0 right-0 m-auto'
                        onClick={() => {
                            handleCloseModal();
                        }}
                    ></motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
