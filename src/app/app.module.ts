import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import { LandingModule } from './landing/landing.module';
import { MapaComponent } from './landing/mapa/mapa.component';
import { TiposComponent } from './landing/tipos/tipos.component';
import { PuntosComponent } from './landing/puntos/puntos.component';
import { UsersComponent } from './landing/users/users.component';

import { TipoService } from './services/tipo.service';
import { PuntosService } from './services/puntos.service';
import { UsersService } from './services/users.service';

const appRoutes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'tipo', component: TiposComponent },
  { path: 'puntos', component: PuntosComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [TipoService, PuntosService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
