var Scales = /** @class */ (function () {
    function Scales() {
        this.arrayProducts = [];
        this.arrayProducts = [];
    }
    //метод добавления нового товара на весы
    Scales.prototype.add = function (product) {
        this.arrayProducts.push(product);
        console.log("Added: " + product.getName() + " with mass " + product.getScale() + "g");
        //console.log(this.arrayProducts[1])
    };
    // метод получения суммарного веса добавленных продуктов
    Scales.prototype.getSumScale = function () {
        var fullWeight;
        fullWeight = this.arrayProducts.reduce(function (sum, current) { return sum + current.getScale(); }, 0);
        return fullWeight;
    };
    // метод получения наименования всех продуктов
    Scales.prototype.getNameList = function () {
        var fullList;
        fullList = this.arrayProducts.map(function (item) { return item.getName(); });
        return fullList;
    };
    return Scales;
}());
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
var Apple = /** @class */ (function () {
    function Apple(_weight) {
        this.weight = _weight;
        this.name = "Apple";
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_weight) {
        this.weight = _weight;
        this.name = "Tomato";
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var scales1 = new Scales();
//let p1:Product=new Product(this.weight,this.name);
var a1 = new Apple(265);
var a2 = new Apple(264);
var a3 = new Apple(195);
var t1 = new Tomato(168);
var t2 = new Tomato(187);
var t3 = new Tomato(252);
scales1.add(a1);
scales1.add(a2);
scales1.add(a3);
scales1.add(t2);
scales1.add(t1);
scales1.add(t3);
console.log(scales1.getNameList());
console.log("total weight: " + scales1.getSumScale() + "g"); //current - текущий элемент
//# sourceMappingURL=app.js.map