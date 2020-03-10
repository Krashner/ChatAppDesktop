const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: false
        }
    })

    // and load the index of the app.
    //to do, use actual address
    win.loadURL('https://capchat.app')

    //remove the menu bar
    win.removeMenu()

    //display window when it's finished loading
    win.once('ready-to-show', () => {
        win.show()
    })

    //window is closed, empty reference
    win.on("closed", () => { win = null; });
}

//Electron has finished its initialization and can start creating windows.
app.on("ready", createWindow);
//reactivate window
app.on("activate", () => win === null && createWindow());
//action for when window is closed
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());