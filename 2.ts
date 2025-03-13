interface Recargable{
    recargar():void;
}
interface Disparable{
    disparar():void;
}
class PistoLaser implements Recargable,Disparable{
    public _cargada:boolean;
    constructor(){
        this._cargada=false;
    }
    recargar() {
        this._cargada=true;
        console.log(`la pistola esta recargada: ${this.recargar}`)
    }
    disparar(): void {
        this._cargada?"la pistola ha disparado":"la pistola no esta cargada";
    }
}
const pisto=new PistoLaser();
pisto.disparar();
console.log(pisto);
pisto.recargar();
console.log(pisto);