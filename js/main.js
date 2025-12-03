const number = 15
if (number % 2 == 1) {
    console.log("Число нечетное");
} else {
    console.log("Число четное");
}


// 2
const age = 70
const discount = age < 18 ? 10 : age >= 18 && age <= 65 ? 20 :  age > 65 ? 30 : 0  
console.log(discount)

// через switchcase

const age1 = 50
switch (true) {
    case  (age1 < 18) :
        console.log(10);
        break
    case (age1 >= 18 && age1 <= 65) :
        console.log(20);
        break
    case (age1 > 65) : 
        console.log(30);
        break
    default :
        console.log("Ошибка")
}
// 3
const username = 'admin'
const password = '123456'
if ((username === 'admin' || username === 'user') && password === '123456' ) {
    console.log('Доступ разрешен')
} else {
    console.log('Доступ запрещен');
}
// 4
const weight = prompt('Введите вес посылки')
const type = prompt('Выберите тип доставки')
if (weight <= 0) {
    alert ('Неккоректный вес посылки')
} 
if (type !== 'Стандарт' && type !== 'Экспресс' && type !== 'Премиум') {
    alert ('Неверный тип доставки')
}
let cost = 0
if (weight < 1) {
    cost += 5
}
else if (weight >= 1 && weight <= 5 ) {
    cost += 10
}
else if (weight > 5) {
    cost += 15
}
let fullCost = 0
switch (type) {
    case 'Стандарт' :
        fullCost = cost*1;
        break
    case 'Экспресс' :
        fullCost = cost*1.5
        break
    case 'Премиум' :
        fullCost = cost*2
        break
}
alert (fullCost)