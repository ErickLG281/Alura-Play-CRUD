async function listarVideos(){
    const conexion  = await fetch("http://localhost:3001/videos");

    const conexionConvertida = conexion.json();

    return  conexionConvertida;

    //console.log(conexionConvertida);
}


async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })

    })

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


async function buscarVideos(palabraClave) {
    const conexion = await fetch(`http://localhost:3001/videos?search=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {

listarVideos , enviarVideo , buscarVideos
}
//listarVideos();
