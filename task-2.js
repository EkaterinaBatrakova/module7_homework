function checkPropertyName(str, obj) { //объявим функцию через FD, позволяющую проверить имя свойства, передадим параметры
    console.log(str in obj); // функция должна возврящать true или false. С помощью оператора in ищем среди ключей объекта переданный в str аргумент
}

let obj = { 1: 'Name', 2: 'Surname' }; // создали объект

checkPropertyName('1', obj); // вызываем функцию, передавая в агрументы строку и объект. Передаем в стоку существующий в объекте ключ.