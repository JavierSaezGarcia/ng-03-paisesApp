import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

   @Output() onEnter: EventEmitter<string>= new EventEmitter();
   
   // onDebounce es para crear eventos cuando se escribe o se deja de escribir en tiempo real
   @Output() onDebounce: EventEmitter<string> = new EventEmitter();

   // 'Subject' es un observador especial de Rx
   
   debouncer: Subject<string> = new Subject;

   @Input() placeholder:string = '';

  

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300)) 
      .subscribe({
        next: (valor) => {        
          this.onDebounce.emit(valor);
        }
      });
      
  }


  termino: string = '';
  // cuando pulsamos enter accedemos al metodo buscar
  // el buscar esta emitiendo el valor (this.termino) con this.onEnter.emit
  // que se escucha en pais component.html de esta forma ' (onEnter)="buscar($event)" '
  // hemos dicho onEnter como si queremos decir onMierda y funcionaria igual ya que es un nombre que le hemos puesto
  // pero es fundamental el @Output() y la clase EventEmitter para que lo escuche en pais.component.html el tag <app-pais-input>
  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino)
    this.debouncer.next(this.termino); // lo hacemos de esta forma porque debouncer usa un observable (subscribe)
    
  }

  

}

