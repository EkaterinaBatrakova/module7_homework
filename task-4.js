const ElectricalAppliances = function (name, power) { // создаем родительскую функцию-прототип
    this.name = name; // создаем свойства
    this.power = power;
    this.connect = false;
};

ElectricalAppliances.prototype.connected = function () { // создаем метод "connected" функции ElectricalAppliances с помощью свойства prototype
    console.log(`${this.name} включен в розетку`);
    this.connect = true;
};
ElectricalAppliances.prototype.unconnected = function () { // создаем метод "unconnected" функции ElectricalAppliances
    console.log(`${this.name} выключен из розетки`);
    this.connect = false;
};

function Lamp(name, brand, madeIn, power) { // создаем дочернюю функцию, которою позже свяжем с родительской
    this.name = name; // создаем свойсвта
    this.brand = brand;
    this.madeIn = madeIn;
    this.power = power;
    this.connect = true;
}
Lamp.prototype = new ElectricalAppliances(); // связываем родительскою и дочернюю функцию-прототип (Создаем делегирующую связь)
Lamp.prototype.getPowerConsumption = function () { //создаем метод функции Lamp
    console.log(`Потребляемая мощность лампочки в ${this.name} за 1 час работы ${this.power * 0.001} кВт`);
}
const nightLamp = new Lamp("Night lamp", "Ikea", "Russia", 20); // создаем экземпляр функции, прототипом является Lamp, и передаем аргументы

nightLamp.connected(); // вызываем метод функции nightLamp
nightLamp.getPowerConsumption();
console.log(nightLamp);

const floorLamp = new Lamp("Floor lamp", "Ashley", "USA", 50); // создаем экземпляр функции, прототипом является Lamp, и передаем аргументы
floorLamp.unconnected();
floorLamp.getPowerConsumption();
console.log(floorLamp);

function KitchenAppliances(name, brand, madeIn, wireLength, color) { // создаем дочернюю функцию, которою позже свяжем с родительской
    this.name = name; // создаем свойсвта
    this.brand = brand;
    this.madeIn = madeIn;
    this.wireLength = wireLength;
    this.color = color;
    this.connect = true;
}
KitchenAppliances.prototype = new ElectricalAppliances(); // связываем родительскою и дочернюю функцию-прототип (Создаем делегирующую связь)
const toaster = new KitchenAppliances("Toaster", "bosch", "China", "3m", "red"); // создаем экземпляр функции, прототипом является KitchenAppliances, и передаем аргументы
const kettle = new KitchenAppliances("Kettle", "bosch", "China", "2m", "silver"); // создаем экземпляр функции, прототипом является KitchenAppliances, и передаем аргументы
KitchenAppliances.prototype.getRemainderWater = function (ml) { //создаем метод функции
    console.log(`В ${this.name} осталось ${ml} мл. воды`);
}
toaster.connected(); // вызываем метод функции
console.log(toaster);
kettle.connected();
kettle.getRemainderWater(300);
console.log(kettle);