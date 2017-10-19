import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { TiposComponent } from './tipos/tipos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapaComponent, TiposComponent]
})
export class LandingModule { }
