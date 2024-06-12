async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

async function enviarProducto(nombre,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })

    const conexionConvertida = await conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
}

// inicio borrar
async function borrarProducto(id) {
    try {
        const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
            method: "DELETE",
            headers: {
                "content-type": "application / json"
            },
        });
        if (!conexion.ok) {
            throw new Error("Error en la solicitud")
        }
    } catch (error) {
        console.error("Error al eliminar el producto del servidor", error);
    }
}
// fin Borrar

export const conexionAPI = {
    listarProductos, enviarProducto, borrarProducto
}

