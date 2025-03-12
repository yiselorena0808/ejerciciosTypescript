interface Person{
    _name:string;
    _address:string;
    _age:number;
    infoo():void;
}
class Employer implements Person{
    _name:string;
    _address:string;
    _age:number;
    constructor(name:string, address:string,age:number){
        this._name=name;
        this._address=address;
        this._age=age;
    }
    infoo(){
        console.log(`esta es la informacion del empleado
            ${this._name}`)
    }
}
let diego= new Employer("diego","123",15);
diego.infoo()