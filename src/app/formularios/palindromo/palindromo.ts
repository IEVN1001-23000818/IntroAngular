import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})

export class Palindromo {

  frase: string = ''

  numeroVocales: number = 0
  numeroConsonantes: number = 0

  vocales: string = ''
  consonantes: string = ''

  resultado: string = ''

  analizar(): void {

    this.numeroVocales = 0
    this.numeroConsonantes = 0
    this.vocales = ''
    this.consonantes = ''

    let arreglo: string[] = []

    for (let i = 0; i < this.frase.length; i++) {

      if (this.frase[i] !== ' ') {

        arreglo.push(this.frase[i])

      }
    }

    for (let i = 0; i < arreglo.length; i++) {

      if (
        arreglo[i] === 'a' ||
        arreglo[i] === 'e' ||
        arreglo[i] === 'i' ||
        arreglo[i] === 'o' ||
        arreglo[i] === 'u' ||
        arreglo[i] === 'A' ||
        arreglo[i] === 'E' ||
        arreglo[i] === 'I' ||
        arreglo[i] === 'O' ||
        arreglo[i] === 'U'
      ) {

        this.numeroVocales++
        this.vocales = this.vocales + arreglo[i]

      } else {

        this.numeroConsonantes++
        this.consonantes = this.consonantes + arreglo[i]
      }
    }

    let palindromo: boolean = true

    let izquierda: number = 0
    let derecha: number = arreglo.length - 1

    while (izquierda < derecha) {

      if (arreglo[izquierda] !== arreglo[derecha]) {

        palindromo = false

      }

      izquierda++
      derecha--
    }

    if (palindromo) {

      this.resultado = 'La cadena es un palíndromo.'

    } else {

      this.resultado = 'La cadena no es un palíndromo.'
    }
  }
}