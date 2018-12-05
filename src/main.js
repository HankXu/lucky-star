const { app, BrowserWindow } = require('electron');

function createWindow () {
    // 创建浏览器窗口
    win = new BrowserWindow({ width: 800, height: 600 });

    // 加载应用的index.html
    win.loadFile('../public/index.html');
}

app.on('ready', createWindow);