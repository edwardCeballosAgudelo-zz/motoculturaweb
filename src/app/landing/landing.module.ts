import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { TiposComponent } from './tipos/tipos.component';
import { FormsModule } from '@angular/forms';
import { PuntosComponent } from './puntos/puntos.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MapaComponent, TiposComponent, PuntosComponent, UsersComponent]
})
export class LandingModule { }
