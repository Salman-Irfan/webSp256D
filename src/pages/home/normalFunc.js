const makeFullName = (firstName, lastName, middleName = "", ) => {
    return (firstName + ' ' + middleName + ' ' + lastName)
}

let kamalNasir = makeFullName("kamal", "nasir")

let chKamal = makeFullName("ch", "nasir", "kamal")

console.log(kamalNasir)
console.log(chKamal)
// justice4Nasir

let name = `abc`
console.log(name) // error
