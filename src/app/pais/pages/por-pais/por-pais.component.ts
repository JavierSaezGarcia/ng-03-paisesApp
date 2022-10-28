import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'Hola Mundo';
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor() { }
  buscar(){
    console.log(this.termino)

  }


}
