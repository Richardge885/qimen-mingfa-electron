import { paipan } from 'qimen-mingfa';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { PanJuInformation } from '../../../interfaces';

interface Props {
    modalState: boolean;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    updateBaoShuMethod: (method: string) => void;
    updateBaoShuNumber: (baoshu: number) => void;
    updateActivePage: (page: string) => void;
    paiPanInfo: {
        paipanMethod: string;
        time: {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
        };
        baoshuMethod: string;
        baoshu: number;
        ziXuanJu: string;
        additionalSettings: {
            traditionalCharacters: boolean;
            singleCharacter: boolean;
        };
    };
}

const ModalBox = ({
    modalState,
    paiPanInfo,
    updatePanJu,
    updateBaoShuMethod,
    updateBaoShuNumber,
    updateActivePage,
}: Props) => {
    // Clear number input box every time the modal is shown
    const numberInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (modalState && numberInputRef.current) {
            numberInputRef.current.value = '';
        }
    }, [modalState]);

    const handleBaoShuMethodChange = (method: string) => {
        updateBaoShuMethod(method);
    };

    return (
        <>
            <div className='flex flex-row items-center justify-center text-xl gap-6'>
                <label
                    htmlFor='时辰'
                    className='flex cursor-pointer flex-col items-center rounded-[6px] border-[2px] border-solid border-red text-red'
                >
                    <input
                        type='radio'
                        name='qiJuMethod'
                        id='时辰'
                        className='peer hidden'
                        value='时辰'
                        checked={paiPanInfo.baoshuMethod === '时辰'}
                        onChange={() => handleBaoShuMethodChange('时辰')}
                    />
                    <span className='px-2 py-1 peer-checked:bg-red peer-checked:text-bglight'>
                        时辰
                    </span>
                </label>
                <label
                    htmlFor='局数'
                    className='flex cursor-pointer flex-col items-center rounded-[6px] border-[2px] border-solid border-red text-red'
                >
                    <input
                        type='radio'
                        name='qiJuMethod'
                        id='局数'
                        className='peer hidden'
                        value='局数'
                        checked={paiPanInfo.baoshuMethod === '局数'}
                        onChange={() => handleBaoShuMethodChange('局数')}
                    />
                    <span className='px-2 py-1 peer-checked:bg-red peer-checked:text-bglight'>
                        局数
                    </span>
                </label>
                <label
                    htmlFor='制筹'
                    className='flex cursor-pointer flex-col items-center rounded-[6px] border-[2px] border-solid border-red text-red'
                >
                    <input
                        type='radio'
                        name='qiJuMethod'
                        id='制筹'
                        className='peer hidden'
                        value='制筹'
                        checked={paiPanInfo.baoshuMethod === '制筹'}
                        onChange={() => handleBaoShuMethodChange('制筹')}
                    />
                    <span className='px-2 py-1 peer-checked:bg-red peer-checked:text-bglight'>
                        制筹
                    </span>
                </label>
            </div>
            <input
                type='number'
                className='h-[2rem] w-[8rem] rounded-[6px] border-[1px] border-solid border-red bg-bgdark p-2 text-center text-xl'
                ref={numberInputRef}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && numberInputRef.current) {
                        updateBaoShuNumber(
                            Number(numberInputRef.current.value),
                        );
                        updatePanJu(paipan(paiPanInfo));
                        updateActivePage('paipan');
                    }
                }}
                onChange={(e) => {
                    updateBaoShuNumber(Number(e.target.value));
                }}
            />
            <Link
                to='/paipan'
                className='flex flex-col items-center justify-center px-10 py-3 rounded-lg bg-red text-center text-xl m:text-2xl sm:text-3xl text-bglight transition-all duration-300 hover:scale-110'
                onClick={() => {
                    updatePanJu(paipan(paiPanInfo));
                    updateActivePage('paipan');
                }}
            >
                起局
            </Link>
        </>
    );
};

export default ModalBox;
