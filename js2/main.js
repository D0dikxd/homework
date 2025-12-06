// 1
for (let i = 1 ; i <= 20 ; i++) {
    if (i % 4 === 0) {
        continue
    }
    console.log(i);
}
// 2
const num = prompt('Введите число для вычисления его факториала', 1)
let fact = 1
for (let i = 1; i <= num; i++) {
    fact *= i 
}
console.log(fact);

//3 
// вариант для нубиков
let stroka = ''
for (let i = 1; i <= 16; i++) {
    if (i % 2 == 0) {
        stroka += "  # # # # # # # # # # # # # # # # \n"     
    } else {
        stroka += " # # # # # # # # # # # # # # # #\n"
    }
}
console.log(stroka);

// этот уже поинтереснее
let stroka2 = ''
for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 64; j++) {
            if (j % 2 == 0) {
                stroka2 += '#'
            } else {
                stroka2 += ' '
            }
        }
        stroka2 += '\n'
        for (let k = 1; k <= 64; k++) {
            if (k % 2 == 0) {
                stroka2 += ' '
            } else {
                stroka2 += '#'
            }
        }
        stroka2 += '\n'
    }
console.log(stroka2);
