interface IScalable {
    //методы
    getScale(): number;
    getName(): string;
}

class Apple implements IScalable {

    name: string;
    weight: number;

    constructor(_name: string,_weight: number) {
        this.weight = _weight;
        this.name = _name;
    }
    getScale(): number {
        return this.weight;
    }

    getName(): string {
        return this.name;
    }
}

class Tomato implements IScalable {

    name: string;
    weight: number;

    constructor(_name: string,_weight: number) {
        this.weight = _weight;
        this.name = _name;
    }
    getScale(): number {
        return this.weight;
    }

    getName(): string {
        return this.name;
    }
}

class Scales {
    arrayProducts: Array<IScalable> = [];

    constructor() {
        this.arrayProducts = [];
    }

    //метод добавления нового товара на весы
    add(product: IScalable): void {
        this.arrayProducts.push(product);
        console.log("Added: " + product.getName() + " with mass " + product.getScale() + "g");
        //console.log(this.arrayProducts[1])
    }

    // метод получения суммарного веса добавленных продуктов
    getSumScale(): number {
        let fullWeight: number;
        fullWeight = this.arrayProducts.reduce((sum: number, current: IScalable) => { return sum + current.getScale() }, 0);
        return fullWeight;
    }
    // метод получения наименования всех продуктов
    getNameList(): string[] {
        let fullList: string[];
        fullList = this.arrayProducts.map((item: IScalable) => { return item.getName() });
        return fullList;

    }

}






let scales1: Scales = new Scales();


let a1: Apple = new Apple('Mackintosh', 265);
let a2: Apple = new Apple('Melba', 264);
let a3: Apple = new Apple('Mantet', 195);
let t1: Tomato = new Tomato('Sir Elian', 168);
let t2: Tomato = new Tomato('Chio Cio San', 187);
let t3: Tomato = new Tomato('Casamori', 252);

scales1.add(a1);
scales1.add(a2);
scales1.add(a3);
scales1.add(t2);
scales1.add(t1);
scales1.add(t3);

console.log(scales1.getNameList());
console.log("total weight: " + scales1.getSumScale() + "g");//current - текущий элемент