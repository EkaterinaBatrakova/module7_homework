class ElectricalAppliances {
    constructor(name, power) {
        this.name = name; // создаем свойства
        this.power = power;
        this.connect = false;
    }
    connected() {
        console.log(`${this.name} включен в розетку`);
        this.connect = true;
    }
    unconnected() {
        console.log(`${this.name} выключен из розетки`);
        this.connect = false;
    }
}

class Lamp extends ElectricalAppliances { // расширим класс
    constructor(name, brand, madeIn, power) {
        super(name); //вызываем суперконструктор до первого обращения к this
        this.brand = brand; // создаем свойства класса Lamp
        this.madeIn = madeIn;
        this.power = power;
        this.connect = true;
    }
    getPowerConsumption() {
        console.log(`Потребляемая мощность лампочки в ${this.name} за 1 час работы ${this.power * 0.001} кВт`);
    }
}
const nightLamp = new Lamp("Night lamp", "Ikea", "Russia", 20); // создаем экземпляр функции, прототипом является Lamp, и передаем аргументы

nightLamp.connected(); // вызываем метод функции nightLamp
nightLamp.getPowerConsumption();
console.log(nightLamp);

const floorLamp = new Lamp("Floor lamp", "Ashley", "USA", 50); // создаем экземпляр функции, прототипом является Lamp, и передаем аргументы
floorLamp.unconnected();
floorLamp.getPowerConsumption();
console.log(floorLamp);

class KitchenAppliances extends ElectricalAppliances { // расширим класс
    constructor(name, brand, madeIn, wireLength, color) {
        super(name); //вызываем суперконструктор до первого обращения к this
        this.brand = brand; // создаем свойсвта класса KitchenAppliances
        this.madeIn = madeIn;
        this.wireLength = wireLength;
        this.color = color;
        this.connect = true;
    }
    getRemainderWater(ml) {
        console.log(`В ${this.name} осталось ${ml} мл. воды`);
    }
}
const toaster = new KitchenAppliances("Toaster", "bosch", "China", "3m", "red"); // создаем экземпляр функции, прототипом является KitchenAppliances, и передаем аргументы
const kettle = new KitchenAppliances("Kettle", "bosch", "China", "2m", "silver"); // создаем экземпляр функции, прототипом является KitchenAppliances, и передаем аргументы
toaster.connected(); // вызываем метод функции
console.log(toaster);
kettle.connected();
kettle.getRemainderWater(300);
console.log(kettle);А