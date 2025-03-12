interface Empleado{
    _nombres:string;
    _salario:number;
    informacion():void;
}
class Gerente implements Empleado{
    _nombres:string;
    _salario:number;
    _departamento:string;
    
    constructor(nombres:string,salario:number,departamento:string){
        this._nombres=nombres;
        this._salario=salario;
        this._departamento=departamento;

    }
    informacion(){
        console.log(`la informacion del gerente es ${this._nombres},${this._salario},${this._departamento}`)
    }
    bonificacion(valor:number):number{
        let boni= this._salario*valor;
        return boni;
    }
}
class Desarrollador implements Empleado{
    _nombres:string;
    _salario:number;
    _lenguaje:string;
    constructor(nombre:string,salario:number,lenguaje:string){
        this._nombres=nombre;
        this._salario=salario;
        this._lenguaje=lenguaje;
    }
    informacion(): void {
        console.log(`la informacion del desarrollador es
             ${this._nombres},${this._salario},${this._lenguaje}`)
    }
}
class Diseñador implements Empleado{
    _nombres:string;
    _salario:number;
    _especialidad:string;
    constructor(nombre:string,salario:number,especialidad:string){
        this._nombres=nombre;
        this._salario=salario;
        this._especialidad=especialidad;
    }
    informacion(): void {
        console.log(`la informacion del desarrollador es
             ${this._nombres},${this._salario},${this._especialidad}`)
    }
}
const empleaditos:Empleado[]=[
    new Gerente("Carlos",8000,"Ventas"),
    new Desarrollador("Victor",3500,"Typescript"),
    new Diseñador("Jhon",2500,"UI")
];
empleaditos.forEach((emple)=>{
    emple.informacion();
});

const gerentecito= new Gerente("Pedro",7000,"produccion");
const desarrolladorcito= new Desarrollador("chaguendo",2000,"javascript");
const empleados2:Empleado[]=[
    gerentecito,
    desarrolladorcito
];
empleados2.forEach((empl)=>empl.informacion());
console.log(gerentecito.bonificacion(0.12));

