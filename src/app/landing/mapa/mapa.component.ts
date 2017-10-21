import { Component, OnInit } from '@angular/core';
import { PuntosService } from '../../services/puntos.service';
import { element } from 'protractor';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  puntosAccidentes: any;
  map;

  constructor(public puntoServices: PuntosService) { }

  ngOnInit() {
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const myLatlng = new google.maps.LatLng(5.0717442, -75.5257211);
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    directionsDisplay.setMap(this.map);

    let myLatLng2;
    const mapa = this.map;
    navigator.geolocation.getCurrentPosition(function(position) {

       myLatLng2 = {lat: position.coords.latitude, lng: position.coords.longitude};
       const image = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';

       const marker = new google.maps.Marker({
         position: myLatLng2,
         map: mapa,
         icon: image
       });
    });


    this.getPuntosAccidentes();
  }

  getPuntosAccidentes() {
    this.puntoServices.getPuntosAccidentes().then((punto) => {
      const respuesta = JSON.parse(punto['_body']);
      this.puntosAccidentes = respuesta.accidentPoints;

      for (let i = 0; i < this.puntosAccidentes.length; i++) {
        const element = this.puntosAccidentes[i];
        const myLatLng = {lat: element.latitud, lng: element.longitud};
        const marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map
        });
      }

    }).catch((err) => {
      console.log(err);
    });
  }

}
