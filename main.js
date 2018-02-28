const {app, BrowserWindow} = require('electron');
  const path = require('path');
  const url = require('url');
  const {ipcMain} = require('electron');

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow, creditsWindow;

  function createMainWindow ()
  {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 640, height: 560, 'minWidth': 640, 'minHeight': 560, frame: false, titleBarStyle: 'hidden', icon: "icon.ico"});

    // and load the index.html of the app.
    mainWindow.loadURL(url.format(
    {
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // Open the DevTools.
    // win.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () =>
    {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
      app.quit();
    });
  }

  function createCreditsWindow()
  {
    creditsWindow = new BrowserWindow({width:400, height:320, resizable: false, icon: "icon.ico"});

    creditsWindow.loadURL(url.format(
    {
      pathname: path.join(__dirname, 'dist/credits.html'),
      protocol: 'file:',
      slashes: true
    }));

    creditsWindow.on('closed', () =>
    {
      creditsWindow = null;
    });
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createMainWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () =>
  {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', () =>
  {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createMainWindow();
  })

  ipcMain.on("about", (event, arg) =>
  {
    console.log(arg);  // prints "ping"
    // event.sender.send('asynchronous-reply', 'pong');
  });

  ipcMain.on("notes", (event, arg) =>
  {
    console.log(arg);  // prints "ping"
    // event.sender.send('asynchronous-reply', 'pong2');
  });

  ipcMain.on("credits", (event, arg) =>
  {
    createCreditsWindow();
  });

  ipcMain.on("minimize", (event, arg) =>
  {
    mainWindow.minimize();
  });

  ipcMain.on("maximize", (event, arg) =>
  {
    if(mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
  });

  ipcMain.on("quit", (event, arg) =>
  {
     app.quit();
  });
