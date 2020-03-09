const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false
        }
    })

    // and load the index of the app.
    //to do, use actual address
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)