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