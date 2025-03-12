interface ControlDispositivos{
 encenderDispositivo(nombre:string):void;
 apagarDispositivo(nombre:string):void;
 obtenerDispositivo(nombre:string):string;
}
interface AutomatizacionHogar{
    crearAutomatizacion(nombre:string,acciones:string[]):void;
    eliminarAutomatizacion(nombre:string):void;
    ejecutarAutomatizacion(nombre:string):void;
}
class CasaInteligente implements ControlDispositivos,AutomatizacionHogar{
   public  _dispositivo:string;
    constructor(dispositivo:string){
        this._dispositivo=dispositivo;
    }
    encenderDispositivo(nombre:string):void{
        this._dispositivo=nombre;
        console.log(`el dispositivo a encender es ${this._dispositivo}`)
    }
    apagarDispositivo(nombre1:string):void{
        this._dispositivo= nombre1;
        console.log(`el dispositivo a encender es ${this._dispositivo}`)
    }
    obtenerDispositivo(nombre2:string):string{
        this._dispositivo=nombre2;
        return this._dispositivo;
    }
    crearAutomatizacion(nombre3:string,acciones:string[]):void{
        console.log(`la automatizacion de creas es ${nombre3}, y la accion ${acciones}`)
    }
    eliminarAutomatizacion(nombre4:string):void{
        console.log(`la automatizacion de creas es ${nombre4}`)
    }
    ejecutarAutomatizacion(nombre5:string):void{
        console.log(`la automatizacion de creas es ${nombre5}`)
    }

}

const micasa= new CasaInteligente("refrigerador");
micasa.encenderDispositivo("bombilla Inteligente");
const micasita: ControlDispositivos & AutomatizacionHogar= new CasaInteligente("Licuadora");
micasita.encenderDispositivo("nevecom");
