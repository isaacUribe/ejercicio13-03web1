const boton = document.querySelector('#boton')
const clientes = []
var cliente
var e

const guardarCliente = (e) =>{
    e.preventDefault();
    function Cliente (nombre,documento,fecha,descripcion){
        this.nombre = nombre
        this.documento = documento
        this.fecha = fecha
        this.descripcion = descripcion
    }
    const nombre = document.querySelector('#nombre').value
    const documento = document.querySelector('#documento').value
    const fecha = document.querySelector('#fecha').value
    const descripcion = document.querySelector('#descripcion').value

    cliente = new Cliente(nombre,documento,fecha,descripcion)

    clientes.push(cliente)

    mostrarClientes()

    document.querySelector('#nombre').value = ""
    document.querySelector('#documento').value = ""
    document.querySelector('#fecha').value = ""
    document.querySelector('#descripcion').value = ""
}

const mostrarClientes = () =>{
    const tabla = document.querySelector('#tabla')
    tabla.innerHTML+=`
    <tr>
    <td>${cliente.nombre}</td>
    <td>${cliente.documento}</td>
    <td>${cliente.fecha}</td>
    <td>${cliente.descripcion}</td>
    </tr>
    `
}

boton.addEventListener('click',guardarCliente)