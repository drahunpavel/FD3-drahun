var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.arrayProducts = [];
        this.arrayProducts = [];
    }
    //метод добавления нового товара на весы
    Scales.prototype.add = function (product) {
        this.arrayProducts.push(product);
        console.log("Added: " + product.name + " with mass " + product.weight + "g");
        console.log(this.arrayProducts);
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
        fullList = this.arrayProducts.map(function (item) { return item.name; });
        return fullList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight; //присваивание ранее описанному свойству
    }
    //методы
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    return Tomato;
}(Product));
var scales1 = new Scales();
//let p1:Product=new Product(this.weight,this.name);
var a1 = new Apple('Mackintosh', 265);
var a2 = new Apple('Melba', 264);
var a3 = new Apple('Mantet', 195);
var t1 = new Tomato('Sir Elian', 168);
var t2 = new Tomato('Chio Cio San', 187);
var t3 = new Tomato('Casamori', 252);
scales1.add(a1);
scales1.add(a2);
scales1.add(a3);
scales1.add(t2);
scales1.add(t1);
scales1.add(t3);
console.log(scales1.getNameList());
console.log("total weight: " + scales1.getSumScale() + "g"); //current - текущий элемент
//# sourceMappingURL=app.js.map