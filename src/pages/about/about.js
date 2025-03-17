import { APP_NAME } from "../../constants/appName.js"

const appName = document.getElementById("appName")
console.log(appName)
appName.innerHTML = `<h1>${APP_NAME}</h1>`