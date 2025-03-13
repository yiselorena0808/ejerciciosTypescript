interface Transporte{
    capacidad:any;
}
interface Avion extends Transporte{
    altitudMaxima:number;
}
class otroAvion implements Avion{
    public capacidad:any;
    public altitudMaxima:number;
    constructor(capacidad:any,altitud:number){
        this.capacidad=capacidad;
        this.altitudMaxima=altitud;
    }
}
const avioncito= new otroAvion(4578,4541);
console.log(avioncito);