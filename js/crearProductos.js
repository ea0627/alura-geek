import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-form]");

async function crearProducto(evento) {

    evento.preventDefault();

    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const imagen = document.querySelector("[data-image]").value;
    
    await conexionAPI.enviarProducto(nombre, precio, imagen);
    
}

formulario.addEventListener("submit", evento => crearProducto(evento));