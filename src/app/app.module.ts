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

import { TipoService } from './services/tipo.service';

const appRoutes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'tipo', component: TiposComponent },
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
  providers: [TipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
