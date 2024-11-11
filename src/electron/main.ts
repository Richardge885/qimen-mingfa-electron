import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null;

function createMainWindow() {
    if (!mainWindow) {
        mainWindow = new BrowserWindow({
            width: 500,
            height: 900,
            minWidth: 400, // Minimum width
            // maxWidth: 520, // Maximum width (commented out)
        });
        mainWindow.setAspectRatio(0.555);
        mainWindow.loadFile(
            path.join(app.getAppPath(), '/dist-react/index.html'),
        );

        mainWindow.on('closed', () => {
            mainWindow = null;
        });
    }
}

app.on('ready', () => {
    createMainWindow();
});

app.on('activate', () => {
    if (mainWindow) {
        mainWindow.focus();
    } else {
        createMainWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
