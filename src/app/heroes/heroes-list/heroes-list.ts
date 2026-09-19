import { Component } from '@angular/core';
import { IHeroes } from '../heroes'; /* shift+alt+. para importar automaticamente lo que requiero */ 


@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {

imageWidth:number=40;
 imageMargin:number=2; 
  muestraImage:boolean=true;
  listFilter:string='';
  
  showImage():void{
    this.muestraImage=!this.muestraImage;
  }
  
  heroes:IHeroes[]=[


    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:"El protagonista de la serie",
      race:"Saiyan",
      ki:60000

    },

    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      description:"Príncipe de los Saiyans",
      race:"Saiyan",
      ki:54000

    },
    {
      imagen:"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      description:"Bulma es la protagonista femenina",
      race:"Human",
      ki:0

    },
    {
      imagen:"https://dragonball-api.com/characters/gohan.webp",
      nombre:"Gohan",
      description:"Simplemente Gohan en Hispanoamérica",
      race:"Saiyan",
      ki:45000

    }


  ]




}
