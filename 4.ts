interface Dispositivo{
    _nombre1:string;
}
interface Smartphone extends Dispositivo{
    pantallaTactil:boolean;
}
class impi implements Smartphone{
    public _nombre1:string;
    public pantallaTactil:boolean;
    constructor(nombre:string,tactil:boolean){
        this._nombre1=nombre;
        this.pantallaTactil=tactil;
    }
}
const smart= new impi("Lenovo",true);
console.log(smart);
