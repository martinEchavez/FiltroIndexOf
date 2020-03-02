const contenido = document.querySelector("#contenido");
const formulario = document.querySelector("#formulario");
const buscar = document.querySelector("#buscar");

const productos = [
    {nombre: 'Platanos', valor: 500},
    {nombre: 'Yuca', valor: 300},
    {nombre: 'Arroz', valor: 2000},
    {nombre: 'Azucar', valor: 800},
    {nombre: 'Café', valor: 100},
]

const filtrar = (e) => {
    
    contenido.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for (const producto of productos) {
        let nombre = producto.nombre.toLocaleLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            contenido.innerHTML += `
                <div class="row">
                    <div class="col">${producto.nombre}</div>
                    <div class="col">${producto.valor}</div>
                </div>            
            `
        }
    }
    if (contenido.innerHTML === '') {
        contenido.innerHTML = `
            <div class="row">
                <div class="col">Producto no encontrado</div>
            </div>
        `
    }
    e.preventDefault()
}
buscar.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)
filtrar();