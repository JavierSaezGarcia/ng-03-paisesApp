import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes  = [
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full' // se pone full para indicar que empieza con un string vacio para evitar problemas
    },
    {
        path: 'region',
        component: PorRegionComponent       

    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',  // dos puntos mas el identificador para una variable como por ejemplo id o codigo que identifique el pais
        component: VerPaisComponent

    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes)
    ],
    exports: [
        RouterModule
    ]
  })
export class AppRoutingModule {}