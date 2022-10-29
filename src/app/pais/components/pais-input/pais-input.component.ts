import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

   @Output() onEnter: EventEmitter<string>= new EventEmitter();

  termino: string = '';
  // cuando pulsamos enter accedemos al metodo buscar
  // el buscar esta emitiendo el valor (this.termino) con this.onEnter.emit
  // que se escucha en pais component.html de esta forma ' (onEnter)="buscar($event)" '
  // hemos dicho onEnter como si queremos decir onMierda y funcionaria igual ya que es un nombre que le hemos puesto
  // pero es fundamental el @Output() y la clase EventEmitter para que lo escuche en pais.component.html el tag <app-pais-input>
  buscar(){
    this.onEnter.emit( this.termino );
  }

  

}
