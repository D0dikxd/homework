// 1
const person = {
    name: "sasha",
    age: 18,
    isStudent: true
}
console.log(person.name, person.age, person.isStudent)

//2 
const isEmpty = object => {
    let empty = true
    for (const key in object) {
        empty = false
        break
    }
    console.log(empty);

}
level = {
}
isEmpty(level)

//3
task = {
    title: "Сделать уроки",
    description: "Сделать правильно",
    isCompleted: false
}
const cloneAndModify = (object, modifications) => {
    const object1 = { ...object, ...modifications }
    for (const keys in object1) {
        console.log(`${keys} – ${object1[keys]}`);
    }
}
homework = {
    task1: "помыть посуду",
    task2: "убраться в комнате"
}
cloneAndModify(task, homework)

//4 
const callAllMethods = object => {
    for (const key in object)
        if (typeof (object[key]) == 'function')
            console.log (`${key} является методом объекта`)
        else {
            console.log(`${key} не является методом объекта`)
        }
}

const phone = {
    brand: "apple",
    proccesor: "m1",
    type:() => {},
    os:() => {}
}
callAllMethods(phone)
