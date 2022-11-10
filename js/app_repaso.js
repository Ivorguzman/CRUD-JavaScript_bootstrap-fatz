
/* == CLASE PARA LOS PRODUCTO === )*/
class Producto {
    constructor(parametroNombre, parametroPrecio, parametroAño) {
        this.propiedadNombre = parametroNombre;
        this.propiedadPrecio = parametroPrecio;
        this.propiedadAño = parametroAño;
    }
}
class UI {
    añadirProducto(producto) {
        console.log(producto);
        const listaDeProducto = document.getElementById('listaDeProducto')
        const elementoHtml = document.createElement('div');
        elementoHtml.innerHTML = `
            <div class="card  text-center  mb-4">
                <div class="card-body">
                    <h2> Ventana informativa</h2>
                
                    <strong>Producto</strong> :   ${producto.propiedadNombre}<br>
                    <strong>Precio</strong> :    ${producto.propiedadPrecio} <br>
                    <strong>Año</strong> :  ${producto.propiedadAño}
                    
                    <br>
                    <a href="#" class="btn btn-primary  margeSuperior-5"   name="borrar">Eliminar Producto</a>
                </div>
            </div>
            `;
        listaDeProducto.appendChild(elementoHtml);//
        // this.limpiarFormulario();
    }
    limpiarFormulario() {
        document.getElementById("formularioProducto").reset();

    }
    borrarProducto(elementoHtml) {
        if (elementoHtml.name === "borrar") {

            elementoHtml.parentElement.parentElement.remove();
        }
        this.mostrarMensaje("Producto eliminado satisfactoriamente", "dismissible ", "primary", "centrado")

    }

    mostrarMensaje(mensaje, claseBoostra1, claseBoostra2, centrado) {
        const divAlerta = document.createElement('div');
        divAlerta.className = `alert alert-${claseBoostra1}  alert-${claseBoostra2}  ${centrado} mt-3`;
        divAlerta.appendChild(document.createTextNode(mensaje))

        // Mostar el in el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(divAlerta, app);


        /* Metodo temporizador */
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}
/* === EVENTOS DEL DOM === */
document.getElementById("formularioProducto").addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreProducto = document.getElementById("nombreForm").value;
    const precioProducto = document.getElementById("precioForm").value;
    const añoProducto = document.getElementById("añoForm").value;
    const producto = new Producto(nombreProducto, precioProducto, añoProducto);
    const ui = new UI();
    // Validación de entrada de datos
    if (nombreProducto === " " || precioProducto === "" || añoProducto === "") {
        return ui.mostrarMensaje('Faltaron  datos por ingresar Intentelo de nuevo', 'dismissible ', 'light', 'alerta');
    }
    ui.añadirProducto(producto);
    ui.limpiarFormulario();
    ui.mostrarMensaje('Producto agregado en forma satiactoria', 'dismissible ', 'danger', 'centrado');



});
document.getElementById("listaDeProducto").addEventListener("click", (event) => {
    console.log(event.target);
    //onst elemntoLista = event.target ;
    const ui = new UI();
    ui.borrarProducto(event.target)

});



