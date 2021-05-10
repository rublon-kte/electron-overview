const {sendMessage} = require("./message.sender.module");
const {ipcRenderer, ipcMain} = require('electron');

module.exports = {
    init: () => {
        const dragAndDrop = document.getElementById('drag-file');
        dragAndDrop.ondragover = () => {
            return false;
        };

        dragAndDrop.ondragleave = () => {
            return false;
        };

        dragAndDrop.ondragend = () => {
            return false;
        };

        dragAndDrop.ondrop = (e) => {
            e.preventDefault();

            const paths = [];
            for (let f of e.dataTransfer.files) {
                console.log('File(s) you dragged here: ', f.path)
                paths.push(f.path);
            }

            ipcRenderer.send('file-upload', paths);

            return false;
        };
    },
    listenToUpload: () => {
        ipcMain.on('file-upload', (event, arg) => {
            sendMessage('File upload starts for:' + JSON.stringify(arg));
            event.returnValue = 'pong'
        })
    }
}