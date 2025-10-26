// const user = {
//     name: Sasha,
//     age: 18,
//     height: 185,
//     sayHi (name) {
//         console.log(`Hello ${name}`)
//     }
// }

const users = [
    {
        name: 'Egor',
        age: 18,
        isAdmin: true,
    },
    {
        name: 'Alex',
        age: 20,
        isAdmin: false,
    },
    {
        name: 'Dima',
        age: 23,
        isAdmin: false,
    },
    {
        name: 'georg',
        age: 15,
        isAdmin: true,
    }
]
let admins = 0
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        admins++
    } 
}
console.log(admins)

