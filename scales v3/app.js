// //class имякласса<тип-параметр>{} Параметризация классов
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.StorageEngineArr = _storage;
    }
    // метод получения суммарного веса добавленных продуктов
    // getSumScale(): number {
    //     let fullWeight: number=0;
    //     let ogj=this.StorageEngineArr;
    //     for(let i; i<ogj.getCount();i++){
    //         fullWeight+=ogj.getItem(i).getScale();
    //     }
    //     console.log("fullWeight: "+fullWeight);
    //     return fullWeight;
    // }
    Scales.prototype.getSumScale = function () {
        var fullWeight = 0;
        for (var i = 0; i < this.StorageEngineArr.getCount(); i++) {
            fullWeight += this.StorageEngineArr.getItem(i)["weight"];
        }
        //console.log("fullWeight: "+fullWeight);
        return fullWeight;
    };
    //метод получения наименования всех продуктов
    Scales.prototype.getNameList = function () {
        var fullList = [];
        for (var i = 0; i < this.StorageEngineArr.getCount(); i++) {
            fullList.push(this.StorageEngineArr.getItem(i).getName()); //.getName()=["name"]
        }
        return fullList;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    // метод добавления нового товара
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("added in ScalesStorageEngineArray " + item.getName());
    };
    //метод получения сохранненого объекта
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        //console.log(this.items[index])
        return this.items[index];
    };
    //кол-во
    ScalesStorageEngineArray.prototype.getCount = function () {
        //console.log(this.items.length)
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    // метод добавления нового товара
    function ScalesStorageEngineLocalStorage() {
        localStorage.clear();
        //let serialObj = JSON.stringify(items);
        //localStorage.setItem("items",serialObj); 
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        localStorage.setItem(String(window.localStorage.length), JSON.stringify(item));
        //console.log(localStorage)
        console.log("added in ScalesStorageEngineLocalStorage " + item.getName());
    };
    //метод получения сохранненого объекта
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        //return JSON.parse(localStorage.getItem(String(index)));
        var obj = JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(obj.name, obj.weight);
    };
    ;
    //кол-во
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return localStorage.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.weight = _weight;
        this.name = _name;
        //console.log("created: "+ this.name + " with mass "+this.weight + "g");
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
// class Apple extends Product {
//     constructor(_name: string,_weight: number) {
//         super(_name,_weight); 
//     }
// }
// class Tomato extends Product {
//     constructor(_name: string,_weight: number) {
//         super(_name,_weight); 
//     }
// }
var a1 = new Product('Mackintosh', 265);
var a2 = new Product('Melba', 264);
var a3 = new Product('Mantet', 195);
var t1 = new Product('Sir Elian', 168);
var t2 = new Product('Chio Cio San', 187);
var t3 = new Product('Casamori', 252);
console.log("===================");
var ssea = new ScalesStorageEngineArray();
ssea.addItem(a1);
ssea.addItem(a2);
ssea.addItem(a3);
ssea.addItem(t1);
ssea.addItem(t2);
ssea.addItem(t3);
console.log("===================");
var scale1 = new Scales(ssea);
//console.log(ssea)
var ssels = new ScalesStorageEngineLocalStorage();
ssels.addItem(a1);
ssels.addItem(a2);
ssels.addItem(a3);
ssels.addItem(t1);
ssels.addItem(t2);
ssels.addItem(t3);
console.log("===================");
//console.log(ssels)
var scale2 = new Scales(ssels);
console.log(scale1.getNameList());
console.log("total weight: " + scale1.getSumScale() + "g");
console.log("===================");
console.log(scale2.getNameList());
console.log("total weight: " + scale2.getSumScale() + "g");
console.log("===================");
//# sourceMappingURL=app.js.map