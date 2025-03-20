const users = [
    {
        name: `uneeb`,
        age: 11,
        email: `uneeb@gmail.com`,
    },
    {
        name: `ali`,
        age: 11,
        email: `ali@gmail.com`
    },
    {
        name: `amir`,
        age: 11,
        email: `amir@gmail.com`
    },
]

console.log(users)

// loops
for (let i in users){
    console.log(i)
    console.log(users[i])
}

const classRoom = {
    students: 30,
    chairs: 35,
    isProjector: true,
}
// console.log(classRoom.students)
for (let i in classRoom){
    console.log(i)
    console.log(classRoom[i])
}
console.log(typeof(users)) //array?

console.log(Array.isArray(users))
console.log(Array.isArray(classRoom))

// if else


if((3>20) && (true)){
    console.log(`inside if condition`)
}else{
    console.log(`outside if and in else`)
}

let num = 1
while(num<10){
    console.log(`true`)
    console.log(num)
    num++
}