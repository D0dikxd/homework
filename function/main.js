//1 
const calculateFinalPrice = (cost, discount, tax ) => {
    finalPrice = (cost -  cost / 100 * discount) + tax 
    return finalPrice
    
}
console.log(calculateFinalPrice(1000, 15, 200));
//2 
const checkAccess = (name, password) => {
    if (name === "admin" && password == "123456") return "Доступ разрешен"
    else return "Доступ запрещен";
}
console.log(checkAccess ('admin', 123456))
//3 
const getTimeOfDay = numOfHours => {
    if(numOfHours >= 0 && numOfHours <= 5) return "Ночь"
    else if(numOfHours >= 6 && numOfHours <= 11) return "Утро"
    else if(numOfHours >= 12 && numOfHours <= 17) return "День"
    else if(numOfHours >= 18 && numOfHours <= 23) return "Вечер"
    else return "введите ваше время от 0 до 23"
}
console.log(getTimeOfDay(12));
//4 
const findFirstEven = (start, end) => {
    let result = 1
    if (start !== end && start < end) {
        while (start <= end) {
            if(start % 2 == 0) {
                result = start
                break
            } else {
                start++
            }
        }}
    else if (start > end) {
        while (start >= end) {
            if(start % 2 == 0) {
                result = start
                break
            } else {
                start--
            }
        }}
    else return "В данном диапозоне нет четных чисел"
    return result
}
console.log(findFirstEven(1122, 112));

