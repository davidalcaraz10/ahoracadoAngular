import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahorcadoAngular';

  palabra = 'HOLA, TE HICE UN JUEGUITO PARA DECIRTE QUE TE AMO JIJI';
  palabraOculta = '';

  intentos = 0; 

  gano = false;
  perdio = false;

  letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   
  constructor() {
    
    this.palabraOculta = '_ '.repeat(this.palabra.length)
  
  }
  
  comprobar(letra: string){

    this.letraExiste(letra)
    const ocultaArr = this.palabraOculta.split(' ');

    for(let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra ){
        ocultaArr[i] = letra; 
      }
    }

    this.palabraOculta = ocultaArr.join(' ');
    this.verificarGanar();
  }

  verificarGanar() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra) {
      this.gano = true;
    } 
    if (this.intentos >= 9) { 
      this.perdio = true;
      }   
  }

  letraExiste(letra: string) {
    if(this.palabra.indexOf(letra) >=0 ){
    } else {
      this.intentos ++;
    }
  }

  reiniciar() {
    this.palabraOculta = '_ '.repeat(this.palabra.length)
    this.intentos = 0;
    this.gano = false;
    this.perdio = false;
  }

}
