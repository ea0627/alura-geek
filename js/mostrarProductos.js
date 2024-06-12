import { conexionAPI } from "./conexionAPI.js";
const lista = document.querySelector("[data-product]")

export default function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.className = "card";

    producto.innerHTML = `<div class="img-container"> 
                            <img src="${imagen}" alt="${nombre}">
                        </div>
                        <div class="card-container--info">
                            <p>${nombre}</p>
                            <div class="card-container--value">
                                <p>$ ${precio} COP</p>
                                <button class="delete-button" data-id="${id}"> 
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    </div>`;
    

    const eliminarProducto = producto.querySelector("[data-id]");
    eliminarProducto.addEventListener("click", async (evento) => {
        evento.preventDefault();    
        await conexionAPI.borrarProducto(id);
        eliminarProducto.remove();
    })

return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)));
}

listarProductos();