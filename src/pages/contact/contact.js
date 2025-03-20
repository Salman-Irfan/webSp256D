import { APP_NAME } from "../../constants/appName.js"
import { handleContactSubmit } from "../../libs/handleContactForm.js"

let amirAge = 23
let amirEmail = `amir@gmail.com`
let amirName = `muhammad aamir khan`

console.log(`my name is ${amirName}, my age is ${amirAge} and my email is ${amirEmail}`)

const displayProfile = (name, age, email, password) => {
    return `<h1>{$name}</h1>`
}

const name = document.getElementById(`name`)

const email = document.getElementById(`email`)
const message = document.getElementById(`message`)

console.log(name, email)

const contactForm = document.getElementById(`contactForm`)

contactForm.addEventListener('submit', handleContactSubmit)

const appName = document.getElementById("appName")
appName.innerHTML = `<h1>${APP_NAME}</h1>`

// name, email, age => umeeb
// name2, email2, age2 => aamir


let uneebName = "uneeb"
let uneeebAge = 123

let uneeb = { 
    name: `uneeb ali`,
    age: 12,
    isWearGlasses: false,
    canStudy: (course1, course2)=>{
        console.log(`is studing ${course1} and ${course2}`)
    }
}

console.log(uneeb)
console.log(uneeb.name) // 
console.log(uneeb.age) // 
console.log(uneeb.isWearGlasses) // 
uneeb.canStudy("web", "os")

let name2 = uneeb.name

const uneebHtml = document.getElementById("uneebHtml")
uneebHtml.innerHTML = `
    <h1>${uneeb.name} is ${uneeb.age} years old having email ${uneeb.email} </h1>
`

console.log(typeof(uneeb))