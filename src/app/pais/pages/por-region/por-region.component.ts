import { Component} from '@angular/core';
import { ConnectableObservable, Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {
  
  termino: string = '';
  hayError: boolean = false;
  //regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regiones: string[] = ['europe','asia','africa','americas','oceania'];
  paises: Country[] = [];
  regionActiva: string = '';
  placeholder:string = "Buscar continente...";
  

  constructor( private paisService: PaisService) { }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  activarRegion ( region: string) {
    if( region === this.regionActiva) { return;}
    this.regionActiva = region;
    this.paises = [];
   
    // if ( region === this.regionActiva ) { return; }
 
    // this.regionActiva = region;
    // this.paises = [];
 
    this.paisService.buscarRegion( region )
      .subscribe( {
              next: paises => {
                console.log( paises); 
                this.paises = paises;
              
               
          }
        });
      
  }
    
  
  

}
