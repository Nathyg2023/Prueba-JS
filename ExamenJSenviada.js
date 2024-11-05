//Planteamiento del Problema:
//Tienes un array de objetos que representan productos. Cada objeto tiene las siguientes propiedades: id, nombre, precio y disponible. Tu tarea es implementar funciones que realicen las siguientes operaciones:

//Encontrar Producto por ID: Implementa una función llamada encontrarProductoPorId que tome como parámetros el array de productos y un ID, y devuelva el objeto del producto correspondiente al ID dado.

//Filtrar Productos por Disponibilidad: Implementa una función llamada filtrarProductosPorDisponibilidad que tome como parámetros el array de productos y un valor de disponibilidad (true o false), y devuelva un nuevo array que contenga solo los productos que tienen la disponibilidad proporcionada.

//Transformar Precios: Implementa una función llamada transformarPrecios que tome como parámetro el array de productos y un factor de transformación. La función debe devolver un nuevo array donde los precios de cada producto se han multiplicado por el factor dado.

//Datos: 

const productos = [
  { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
  { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
  { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];

const idBuscado = 2;

const encontrarProductoPorId = (arr, id) => arr.find((item) => item.id === id)

const productoEncontrado = encontrarProductoPorId(productos, idBuscado)
console.log(productoEncontrado)

// Salida Esperada: { id: 2, nombre: 'Producto B', precio: 30, disponible: false }


const disponibilidadFiltrada = false;

const filtrarProductosPorDisponibilidad = (arr, disp) => arr.filter((item) => item.disponible === disp)

const productosFiltrados = filtrarProductosPorDisponibilidad(productos, disponibilidadFiltrada);
console.log(productosFiltrados);

// Salida Esperada: [{ id: 2, nombre: 'Producto B', precio: 30, disponible: false }]


const factorTransformacion = 1.1;

const transformarPrecios = (arr, factor) => {
    return arr.map((item) => {
        return {
            ...item,
            precio: Math.round(item.precio * factor)
        }
    })
}

const productosTransformados = transformarPrecios(productos, factorTransformacion)

console.log(productosTransformados);

// Salida Esperada: [
//   { id: 1, nombre: 'Producto A', precio: 55, disponible: true },
//   { id: 2, nombre: 'Producto B', precio: 33, disponible: false },
//   { id: 3, nombre: 'Producto C', precio: 22, disponible: true }
// ]

