import {
    initializePanJu,
    checkAndInitializeLocalStorage,
} from './inistializations';
import HomePage from './Routes/HomePage';
import PaiPanPage from './Routes/PaiPanPage';
import SettingsPage from './Routes/SettingsPage';
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { PanJuInformation } from './interfaces';

function App() {
    const [activePageIndex, setActivePage] = useState('home');
    const [displayHuanJu, setDisplayHuanJu] = useState(false);
    const enableHuanJu = () => {
        setDisplayHuanJu(true);
    };
    const disableHuanJu = () => {
        setDisplayHuanJu(false);
    };
    const getCurrentTimeForInputTag = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const [inputTime, setInputTime] = useState(getCurrentTimeForInputTag());

    const updateActivePage = (page: string) => setActivePage(page);

    const [panJu, setPanJu] = useState(initializePanJu());
    const updatePanJu = (panJuInfo: PanJuInformation) => {
        setPanJu(panJuInfo);
    };

    checkAndInitializeLocalStorage();

    return (
        <>
            <div className='flex flex-col '>
                <div className='flex-grow'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <HomePage
                                    updatePanJu={updatePanJu}
                                    updateActivePage={updateActivePage}
                                    getCurrentTimeForInputTag={
                                        getCurrentTimeForInputTag
                                    }
                                    setInputTime={setInputTime}
                                    inputTime={inputTime}
                                />
                            }
                        />
                        <Route
                            path='/paipan'
                            element={
                                <PaiPanPage
                                    panJuInfo={panJu}
                                    displayHuanJu={displayHuanJu}
                                    enableHuanJu={enableHuanJu}
                                    disableHuanJu={disableHuanJu}
                                    updatePanJu={updatePanJu}
                                />
                            }
                        />
                        <Route path='/settings' element={<SettingsPage />} />
                    </Routes>

                    <NavigationBar
                        activePage={activePageIndex}
                        setActivePage={updateActivePage}
                        disableHuanJu={disableHuanJu}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
