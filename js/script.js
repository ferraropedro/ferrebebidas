class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const productos = []
const elementosCarrito = []

const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarritoCompras = document.querySelector("#items")
const contenedorFooterCarrito = document.querySelector("#footer")

cargarProductos()
catalogoProductos()

function catalogoProductos(){
    contenedorProductos.innerHTML = ""

    productos.forEach(
        (producto) => {
            let carta = crearCard(producto)
            contenedorProductos.append(carta)
        }
    )
}

function crearCard(producto) {
    
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-dark";
    botonAgregar.innerText = "Agregar";
   
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} $</p>
    `;
    cuerpoCarta.append(botonAgregar);

    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;
  
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    botonAgregar.onclick = (e) => {

        let elementoCarrito = new ElementoCarrito(producto, 1)
        elementosCarrito.push(elementoCarrito)

        dibujarCarrito()

    }

    return carta;

}

function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = ""

    let totalCarrito = 0

    elementosCarrito.forEach(
        (elemento) => {
            let renglonCarrito = document.createElement("tr")

            renglonCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>${elemento.producto.precio}</td>
                <td>${elemento.producto.precio*elemento.cantidad}</td>

            `
            totalCarrito += elemento.producto.precio*elemento.cantidad
            contenedorCarritoCompras.append(renglonCarrito)

            let inputCantidad  = document.getElementById(`cantidad-producto-${elemento.producto.id}`)

            inputCantidad.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value
                elemento.cantidad = nuevaCantidad
                dibujarCarrito()
            })

        }
    )
}