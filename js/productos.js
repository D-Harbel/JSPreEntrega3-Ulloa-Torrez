
const productoscoderpantabla = [
    { code: 1, name: 'masa madre', value: 400, calories: 'poco' },
    { code: 2, name: 'pan molde', value: 500, calories: 'poco' },
    { code: 3, name: 'pan artesanal', value: 250, calories: 'alto' },
    { code: 4, name: 'pan baguette', value: 300, calories: 'medio' },
    { code: 5, name: 'pan ciabatta', value: 230, calories: 'alto' },
    { code: 6, name: 'Pan De Chocolate', value: 210, calories: 'alto' },
    { code: 7, name: 'pan gallego', value: 320, calories: 'medio' },
]


const productoscoderpancard = [
    { codigo: 1, img: 1, nombre: 'masa madre', precio: 400, calorias: 'poco' },
    { codigo: 2, img: 2, nombre: 'pan molde', precio: 500, calorias: 'poco' },
    { codigo: 3, img: 3, nombre: 'pan artesanal', precio: 250, calorias: 'alto' },
    { codigo: 4, img: 4, nombre: 'pan baguette', precio: 300, calorias: 'medio' },
    { codigo: 5, img: 5, nombre: 'pan ciabatta', precio: 230, calorias: 'alto' },
    { codigo: 6, img: 6, nombre: 'Pan De Chocolate', precio: 210, calorias: 'alto' },
    { codigo: 7, img: 7, nombre: 'pan gallego', precio: 320, calorias: 'medio' },
]

function savefavLS() {
    if (favoritos.length > 0) {
        localStorage.setItem('favorito', JSON.stringify(favoritos))
    } 
}

function recoverfavLS() {
    if (localStorage.getItem('favorito')) {
        return JSON.parse(localStorage.getItem('favorito'))
    } else {
        return []
    }
}


const favoritos = recoverfavLS()