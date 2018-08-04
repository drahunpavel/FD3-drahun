interface IScalable {
    //методы
    getScale(): number;
    getName(): string;
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

// class Product {
//     //описываем свойство класса
//     name: string;
//     weight: number;

//     constructor(_name: string, _weight: number) {
//         this.name = _name;
//         this.weight = _weight;//присваивание ранее описанному свойству
//     }

//     // //методы
//     // getScale(): number {
//     //     return this.weight;
//     // }

//     // getName(): string {
//     //     return this.name;
//     // }
// }

class Apple implements IScalable {

    name: string;
    weight: number;

    constructor(_weight: number) {
        this.weight = _weight;
        this.name = "Apple";
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

    constructor(_weight: number) {
        this.weight = _weight;
        this.name = "Tomato";
    }
    getScale(): number {
        return this.weight;
    }

    getName(): string {
        return this.name;
    }
}



let scales1: Scales = new Scales();

//let p1:Product=new Product(this.weight,this.name);

let a1: Apple = new Apple(265);
let a2: Apple = new Apple(264);
let a3: Apple = new Apple(195);
let t1: Tomato = new Tomato(168);
let t2: Tomato = new Tomato(187);
let t3: Tomato = new Tomato(252);

scales1.add(a1);
scales1.add(a2);
scales1.add(a3);
scales1.add(t2);
scales1.add(t1);
scales1.add(t3);

console.log(scales1.getNameList());
console.log("total weight: " + scales1.getSumScale() + "g");//current - текущий элемент