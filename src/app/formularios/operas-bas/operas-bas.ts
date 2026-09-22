import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {

  num1: string = ''
  num2: string = ''
  calcular: string = ''
  resultado: number = 0

  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2)
}

  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2)
}

  multiplicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2)
  }

  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2)
  }

  operacion(): void {

    if (this.calcular === 'sumar') { /* sirve para revisar la opción que escogio el usario y comparar */
      this.sumar()

    } else if (this.calcular === 'restar') {
      this.restar()

    } else if (this.calcular === 'multiplicar') {
      this.multiplicar()

    } else if (this.calcular === 'dividir') {
      this.dividir()
    }
  }
}

