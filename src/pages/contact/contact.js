console.log(`js integration`)

const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(name.value)
    console.log(email.value)
    console.log(message.value)
})