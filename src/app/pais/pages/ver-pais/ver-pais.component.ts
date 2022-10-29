import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  // con la admitracion es patra que typescript confie en que el resultado puede ser nulo aunque siempre tendra data
  pais!:Country[];
  Object = Object;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }


  ngOnInit(): void {
    // otra forma con RxJs switchMap
    this.activatedRoute.params
      .pipe(
          switchMap(({id})  => this.paisService.getPaisPorCodigo(id)),
          tap( console.log )        
      )
      .subscribe( pais => this.pais = pais); 


    // esta forma es un subscribe dentro de otro subscribe que funciona igual que la anterior
    // this.activatedRoute.params
    //   .subscribe( ({id}) =>{
    //       console.log(id);

    //       this.paisService.getPaisPorCodigo( id )
    //         .subscribe( pais => {
    //           console.log(pais);
            

    //       })
    //     }
        
    //   )
    // 
    
    

      

  }

}
