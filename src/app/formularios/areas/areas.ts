import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  num1: string = ''
  num2: string =''
  calcular: string = ''
  resultado: number = 0 


  circulo():void {
    this.resultado = 3.1416 * parseInt(this.num1) * parseInt(this.num1)
  }

  triangulo():void{
    this.resultado = parseInt(this.num1) * parseInt(this.num2) /2
  }

  rectangulo():void{
    this.resultado = parseInt(this.num1) * parseInt(this.num2)
  }

  pentagono():void{
    this.resultado = parseInt(this.num1) * parseInt(this.num2) /2
  }


  operacion():void{
    if(this.calcular === 'circulo'){
      this.circulo()
    } else if (this.calcular === 'triangulo'){
      this.triangulo()
    } else if (this.calcular === 'rectangulo'){
      this.rectangulo()
    } else if (this.calcular === 'pentagono'){
      this.pentagono()
    }
  }


}
