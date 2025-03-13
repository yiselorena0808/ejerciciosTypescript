interface VideoJuego{
    titulo:string;
    plataforma:string;
}
class Juego implements VideoJuego{
    titulo:string="Mario Bross";
    plataforma:string="Play Store";
}
const videooo= new Juego();
console.log(videooo);