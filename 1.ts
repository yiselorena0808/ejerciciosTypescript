interface Pelicula {
    titulo: string;
    director: string;
    añoEstreno?: number;
    imprimir(): void;
}

class pelic implements Pelicula {
    titulo: string;
    director: string;
    añoEstreno?: number;

    constructor(titulo: string, director: string, añoEstreno?: number) {
        this.titulo = titulo;
        this.director = director;
        this.añoEstreno = añoEstreno;
    }

    imprimir(): void {
        if (this.añoEstreno === undefined) {
            console.log(`La película con título: ${this.titulo}, director: ${this.director}, no tiene información del año de estreno.`);
        } else {
            console.log(`La película con título: ${this.titulo}, director: ${this.director}, año de estreno: ${this.añoEstreno}.`);
        }
    }
}

const peliculita= new pelic("rouce","Lorena Salazar")
peliculita.imprimir();