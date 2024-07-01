import electron, {ipcRenderer, contextBridge} from 'electron'
import child_process, {exec} from "child_process";
// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args
    return ipcRenderer.off(channel, ...omit)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args
    return ipcRenderer.send(channel, ...omit)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args
    return ipcRenderer.invoke(channel, ...omit)
  },
})
contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
})
const changeWallpaper = () => {
  var src = JSON.parse(localStorage.getItem("paths"));
  const weather = JSON.parse(localStorage.getItem("weather"));
  if (weather === "01d") {
    src = src[0]["path"];
  }
  if (weather === "02d") {
    src = src[1]["path"];
  }
  if (weather === "03d") {
    src = src[2]["path"];
  }
  if (weather === "04d") {
    src = src[3]["path"];
  }
  if (weather === "09d") {
    src = src[4]["path"];
  }
  if (weather === "10d") {
    src = src[5]["path"];
  }
  if (weather === "11d") {
    src = src[6]["path"];
  }
  if (weather === "13d") {
    src = src[7]["path"];
  }
  if (weather === "50d") {
    src = src[8]["path"];
  }
  console.log();
  localStorage.setItem('img', (src))
  child_process.exec("wallpaper " + src.slice(2), (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log('success');
  });
};
changeWallpaper();
setInterval(() => {
  changeWallpaper();
}, 12e4);