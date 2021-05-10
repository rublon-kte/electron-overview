const { Menu, Tray } = require('electron')
let tray = null;
module.exports = {
    setTray: () => {
        tray = new Tray('assets/icons/check-ok.ico');
        const contextMenu = Menu.buildFromTemplate([
            { label: 'Tray item 1', type: 'radio' },
            { label: 'Tray item 2', type: 'radio' },
            { label: 'Tray item 3', type: 'radio', checked: true }
        ])
        tray.setToolTip('This text comes from tray module.');
        tray.setContextMenu(contextMenu);
    },
    destroy: () => {
        if (tray) {
            tray.destroy()
        }
    }
}
