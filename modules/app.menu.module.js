const {Menu, shell, app} = require('electron');

module.exports = {
    create: (mainWindow) => {
        const menu = Menu.buildFromTemplate([
            {
                label: 'Menu',
                submenu: [
                    {
                        label: 'Preview notification',
                        click() {
                            mainWindow.webContents.send('notify-user', 'Thanks for clicking!');
                        }
                    },
                    {
                        label: 'Rublon MFA - website',
                        click() {
                            shell.openExternal('https://rublon.com');
                        }
                    },
                    {
                        label: 'Exit',
                        click(){
                            app.quit();
                        }
                    }
                ]
            }
        ]);
        Menu.setApplicationMenu(menu);
    }
};