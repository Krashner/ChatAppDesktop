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
    win.loadURL('http://localhost:3000')

    //remove the menu bar
    win.removeMenu()
    
    //display window when it's finished loading
    win.once('ready-to-show', () => {
        win.show()
    })
}

app.whenReady().then(createWindow)