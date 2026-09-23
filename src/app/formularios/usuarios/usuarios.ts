import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})
export class Usuarios {

  usuario: string = ''
  contrasena: string = ''
  resultado: string = ''

  usuarioCorrecto: string = 'Mena'
  contrasenaCorrecta: string = '1404'

  validar():void{
    if (this.usuario !== this.usuarioCorrecto) {

      this.resultado = 'El nombre de usuario no es válido.'

    } else if (this.contrasena !== this.contrasenaCorrecta) {

      this.resultado = 'La contraseña no es válida.'

    } else {

      this.resultado = 'Bienvenido al sistema, ' + this.usuario + '.'

    }

  }
  }

