let number = 20;
let string = "Hola";
let array = [1,2,3];
let nulo = null
let obj = {
    nombre: "Nathy",
    edad: 34,
}
let booleanos = true
let indefinido = undefined
let bigInt = 1235452555
let Symbol = symbol


const arrayUsers = [
    {name: "Persona1", age: 25, email: "persona1@example.com", id: 1},
    {name: "Persona2", age: 30, email: "persona2@example.com", id: 2},
    {name: "Persona3", age: 22, email: "persona3@example.com", id: 3},
    {name: "Persona4", age: 28, email: "persona4@example.com", id: 4},
    {name: "Persona5", age: 35, email: "persona5@example.com", id: 5},
    {name: "Persona6", age: 27, email: "persona6@example.com", id: 6}
  ]

  const findId = (arr, num) => {
    return arr.find((item) => item.id === num)
  }

console.log(findId(arrayUsers, 3))

const filterNameEmail = (arr) => {
    return arr.map(({name, email}) => {
        return {
            name,
            email
        }
    })
}

console.log(filterNameEmail(arrayUsers))







