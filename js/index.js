const PCP = document.querySelector('#CPP')
//PCP: productos coder pan

const PCPC = document.querySelector('#container')

const Barrabuscadora = document.querySelector('#buscadortabla')
const BarraBCard = document.querySelector('#buscadorcard')

const mensaje = document.querySelector('div.msg')
mensaje.textContent = 'mira nuestros productos'


const productomsg = document.querySelector('div.msg2')



//table
function listaproductotabla(producto) {
        return `<tr>
                    <td class="class-table-number">${producto.code}</td>
                    <td>${producto.name}</td>
                    <td>${producto.value}</td>
                    <td>${producto.calories}</td>
                    <td><button id="${producto.code}" class="button button-big-emoji">👍🏻</button></td>
                </tr>`
}

Barrabuscadora.addEventListener("search", ()=> {
    if (Barrabuscadora.value.trim() !== "") {
        let arrayResultante = productoscoderpantabla.filter((producto)=> producto.name.toLowerCase().includes(Barrabuscadora.value.trim().toLowerCase()))
        cargaproducto(arrayResultante)
    }
})

function botonfav() {
    const botones = document.querySelectorAll('button.button.button-big-emoji')
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let producto = productoscoderpantabla.find((prod)=> prod.code === parseInt(boton.id))
            favoritos.push(producto)
            productomsg.textContent = "producto agregado a favoritos: " + producto.name
            savefavLS()
        })
    })
}


function cargaproducto(array) {
    PCP.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> PCP.innerHTML += listaproductotabla(producto) )
        botonfav()
    } else {
        productomsg.textContent = "Producto sin alistar"
    }
}


cargaproducto(productoscoderpantabla)
//table fin

//card
function listaProductoCard(producto) {
    return `
    <article id="producto1" class="card">
    <h3 class="card-title">${producto.nombre}</h3>
    <div class="card-img${producto.img}"></div>
    <h4 class="card-calorias">Nivel calorico:${producto.calorias}</h4>
    <p class=" card-precio">$ ${producto.precio}</p>
    <button id="${producto.codigo}" class="button button-outline">👍🏻</button>
</article>`
}


BarraBCard.addEventListener('search', ()=> {
    localStorage.setItem("ultimaBusqueda", mensaje.value)
    const resultado = productoscoderpancard.filter((producto)=> producto.nombre.toLowerCase().includes(BarraBCard.value.toLowerCase()))
    cargaPcard(resultado)
})


function botonfavcard() {
    const botoncard = document.querySelectorAll('button.button.button-outline')
    botoncard.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let producto = productoscoderpancard.find((prod)=> prod.codigo === parseInt(boton.id))
            favoritos.push(producto)
            mensaje.textContent = "producto agregado a favoritos: " + producto.nombre
            savefavLS()
        })
    })
}

function cargaPcard(array) {
    PCPC.innerHTML = ""
    array.forEach((producto)=> {
        PCPC.innerHTML += listaProductoCard(producto)
    })
    botonfavcard()
}
cargaPcard(productoscoderpancard)





//card fin