const informacion = document.getElementById('info')
informacion.innerText = `Esta app está usando Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), y Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response)
}

func()