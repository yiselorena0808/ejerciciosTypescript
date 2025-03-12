interface Reptil {
mostrarInfor():void;
}
interface Volardor{
mostrarInfor():void;
}
interface Animalitos extends Reptil{
    nombre:string;
    mostrarInfor():void;
}

class Animal implements Animalitos,Volardor{
    public nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
    mostrarInfor():void{
        console.log(`el nombre del animal es ${this.nombre}`)
    }
}
const mianimal: Animalitos & Volardor = new Animal("lucas");
mianimal.mostrarInfor();
