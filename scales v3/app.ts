interface IStorageEngine  {
    //методы
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;

}

// //class имякласса<тип-параметр>{} Параметризация классов
class Scales<StorageEngine extends IStorageEngine>{ //class имякласса<тип-параметр extends интерфейс>{} - Ограничение тИпового параметра
    
    StorageEngineArr: StorageEngine;

    constructor(_storage:StorageEngine){
        this.StorageEngineArr=_storage;
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
    getSumScale(): number {
        let fullWeight: number=0;
        for(let i=0; i<this.StorageEngineArr.getCount();i++){
            fullWeight+=this.StorageEngineArr.getItem(i)["weight"];
        }
        //console.log("fullWeight: "+fullWeight);
        return fullWeight;
    }
    // метод получения наименования всех продуктов
    getNameList(): Array<string> {
        let fullList: Array<string>=[];
        for(let i=0; i<this.StorageEngineArr.getCount();i++){
            fullList.push(this.StorageEngineArr.getItem(i).getName());//getName()=["name"]
        }
        return fullList;

    }
    
}

class ScalesStorageEngineArray implements IStorageEngine{
    
    items:Array<Product>

    constructor(){
        this.items=[];
    }

        // метод добавления нового товара
        addItem(item:Product):void {
            this.items.push(item)
            console.log("added in ScalesStorageEngineArray "+item.getName());
        }

        //метод получения сохранненого объекта
        getItem(index:number):Product {
            //console.log(this.items[index])
            return this.items[index];
        }
        
        //кол-во
        getCount():number {
            //console.log(this.items.length)
            return this.items.length;
        }
}
class ScalesStorageEngineLocalStorage implements IStorageEngine{
            // метод добавления нового товара
            addItem(item:Product):void {
                localStorage.setItem(String(localStorage.length), JSON.stringify(item));
                console.log("added in ScalesStorageEngineLocalStorage "+item.getName());
            }
    
        //метод получения сохранненого объекта
        getItem(index:number):Product{
            return JSON.parse(localStorage.getItem(String(index)));
        };
        
        //кол-во
        getCount():number{
            return localStorage.length;    
        };
}

class Product{

    name: string;
    weight: number;

    constructor(_name: string,_weight: number) {
        this.weight = _weight;
        this.name = _name;
        console.log("created: "+ this.name + " with mass "+this.weight + "g");
    }

    getScale(): number {
        return this.weight;
    }

    getName(): string {
        return this.name;
    }
}

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

let a1: Product = new Product('Mackintosh', 265);
let a2: Product = new Product('Melba', 264);
let a3: Product = new Product('Mantet', 195);
let t1: Product = new Product('Sir Elian', 168);
let t2: Product = new Product('Chio Cio San', 187);
let t3: Product = new Product('Casamori', 252);
console.log("===================")

// let ssea=new ScalesStorageEngineArray();
// ssea.addItem(a1);
// ssea.addItem(a2);
// ssea.addItem(a3);
// ssea.addItem(t1);
// ssea.addItem(t2);
// ssea.addItem(t3);
// let scale1=new Scales<ScalesStorageEngineArray>(ssea);


let ssels=new ScalesStorageEngineLocalStorage();
ssels.addItem(a1);
ssels.addItem(a2);
ssels.addItem(a3);
ssels.addItem(t1);
ssels.addItem(t2);
ssels.addItem(t3);
let scale2=new Scales<ScalesStorageEngineLocalStorage>(ssels);



// console.log(scale1.getNameList());
// console.log("total weight: " + scale1.getSumScale() + "g");
// console.log("===================")

// console.log(scale2.getNameList());
console.log("total weight: " + scale2.getSumScale() + "g");
console.log("===================")