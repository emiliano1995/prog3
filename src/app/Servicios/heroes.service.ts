import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes:Heroe[] = [
        {
          nombre: "XR150",
          bio: "Excelente para uso Offroad, muy versatil para ciudad",
          img: "assets/img/XR250.png",
          aparicion: "2022-11-01",
          casa:"HONDA"
        },
        {
          nombre: "400NK",
          bio: "Excelente moto para uso urbano y viaje gracias a su motor de 400cc nos permite conseguir velodicades tremendas",
          img: "assets/img/400NK.png",
          aparicion: "2023-05-01",
          casa:"CFMOTO"
        },
        {
          nombre: "XTZ250",
          bio: "Esta moto compite directamente con la Honda XR250 tornado pero inocorpora tecnologia de punta como frenos ABS y tambien inyeccion electronica",
          img: "assets/img/XTZ250.png",
          aparicion: "2023-01-01",
          casa: "YAMAHA"
        },
        {
          nombre: "DUKE200",
          bio: "Una moto liviana y versatil con tan solo 125kg y un motor de 200 centimetros cubicos logra una aceleracion increible, consiguiendo asi diversion asegurada",
          img: "assets/img/DUKE200.png",
          aparicion: "2019-05-01",
          casa:"KTM"
        },
        {
          nombre: "800MT",
          bio: "Esta moto incorpora en su corazon un motor 790 de la firma KTM es extremadamente poderosa y veloz.",
          img: "assets/img/800MT.png",
          aparicion: "2022-06-01",
          casa: "CFMOTO"
        },
        {
          nombre: "390 Adventure",
          bio: "Una moto pensada para la aventura, su poderoso motor de 390 cc nos permitira hacer viajes largos con una velocidad crucero super confortable y su confort nos permitira disfrutar no solo del destion sino del viaje",
          img: "assets/img/390ADV.png",
          aparicion: "2021-08-01",
          casa: "KTM"
        },
        {
          nombre: "MT03",
          bio: "Una poderosa moto del segmento Nacked con un poderoso motor de 300cc bi-cilindrico nos permitira desarrollar un torque y velocidad de punta muy envidiables.",
          img: "assets/img/MT03.png",
          aparicion: "2020-11-01",
          casa: "YAMAHA"
        }
      ];
    
    constructor() {
        console.log("Servicio listo para usar")
    }

    getHeroes():Heroe[]{
      return this.heroes;
    }

    getHeroe(idx: number){
      return this.heroes[idx]; 
    }

    buscarHeroes(termino:string){

      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for (let i = 0; i<this.heroes.length; i ++){

        let heroe = this.heroes[i];

        let nombre = heroe.nombre.toLowerCase();

        if(nombre.indexOf(termino) >= 0){
          heroe.idx = i;
          heroesArr.push(heroe)
        }
      }

      return heroesArr;

    }

}

export interface Heroe{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa:  string;
    idx?: number;
}