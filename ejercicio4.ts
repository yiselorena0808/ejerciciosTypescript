interface Automovil{
    marca:string;
    modelo?:string;//propiedad modelo opcional
    precio:number;
    mostrarInfo():void;
}
class Moto implements Automovil{
    public _marca:string='';
    public _precio: number=0;



    mostrarInfo():void{
        console.log(`${this.marca},${this.precio}`);
    }
    set marca(nuevaMarca:string){
        this._marca=nuevaMarca;
    }
    get marca():string{
        return this._marca;
    }
    set precio(nuevoPrecio:number){
        this._precio=nuevoPrecio;
    }
    get precio():number{
        return this._precio;
    }

}
const auto:Automovil= new Moto();
auto.marca="Chevrolet";
console.log(auto);
console.log(auto.marca);
auto.precio=12000;
console.log(auto);
console.log(auto.precio);