import { useState } from 'react';

const Settings = () => {
    const settings = JSON.parse(localStorage.getItem('qimenSettings')!);
    const [wuxingColor, setWuxingColor] = useState(settings.wuXingColor);
    const [traditionalChinese, setTraditionalChinese] = useState(
        settings.traditionalChar,
    );
    const [singleCharacterDisplay, setSingleCharacterDisplay] = useState(
        settings.singleChar,
    );
    const [displayLiuQin, setDisplayLiuQin] = useState(settings.displayLiuQin);
    const updateSettings = () => {
        settings.wuXingColor = wuxingColor;
        settings.traditionalChar = traditionalChinese;
        settings.singleChar = singleCharacterDisplay;
        settings.displayLiuQin = displayLiuQin;
        localStorage.setItem('qimenSettings', JSON.stringify(settings));
    };
    updateSettings();

    return (
        <div className='flex flex-col items-center justify-center gap-[1rem] bg-bglight h-dvh'>
            <h1 className='absolute top-0 pt-4 text-4xl text-red'>设置</h1>
            <label className='flex w-2/3 sm:w-[20rem] justify-between text-2xl text-text'>
                五行颜色
                <span className='flex h-[2rem] w-[2rem] items-center justify-center rounded-lg border-[2px] border-solid border-red'>
                    <input
                        className='peer h-[1.5rem] w-[1.5rem] border-spacing-1 appearance-none rounded-md p-2 checked:bg-red'
                        type='checkbox'
                        checked={wuxingColor}
                        onChange={(e) => setWuxingColor(e.target.checked)}
                    />
                </span>
            </label>
            <label className='flex w-2/3 sm:w-[20rem] justify-between text-2xl text-text'>
                繁体
                <span className='flex h-[2rem] w-[2rem] items-center justify-center rounded-lg border-[2px] border-solid border-red'>
                    <input
                        className='peer h-[1.5rem] w-[1.5rem] border-spacing-1 appearance-none rounded-md p-2 checked:bg-red'
                        type='checkbox'
                        checked={traditionalChinese}
                        onChange={(e) =>
                            setTraditionalChinese(e.target.checked)
                        }
                    />
                </span>
            </label>
            <label className='flex w-2/3 sm:w-[20rem] justify-between text-2xl text-text'>
                单字显示
                <span className='flex h-[2rem] w-[2rem] items-center justify-center rounded-lg border-[2px] border-solid border-red'>
                    <input
                        className='peer h-[1.5rem] w-[1.5rem] border-spacing-1 appearance-none rounded-md p-2 checked:bg-red'
                        type='checkbox'
                        checked={singleCharacterDisplay}
                        onChange={(e) =>
                            setSingleCharacterDisplay(e.target.checked)
                        }
                    />
                </span>
            </label>
            <label className='flex w-3/4 sm:w-[20rem] justify-between text-2xl text-text'>
                显示六亲/十神
                <select
                    className='rounded-lg bg-bgdark'
                    value={displayLiuQin}
                    onChange={(e) => setDisplayLiuQin(e.target.value)}
                >
                    <option value=''>无</option>
                    <option value='六亲'>六亲</option>
                    <option value='十神'>十神</option>
                </select>
            </label>
        </div>
    );
};

export default Settings;
