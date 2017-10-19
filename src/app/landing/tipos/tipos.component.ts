import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../services/tipo.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {

  tipoNormas: any;

  constructor(public tipoServices: TipoService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.tipoServices.getTypeNormas().then((tipoNorma) => {
      const respuesta = JSON.parse(tipoNorma['_body']);
      this.tipoNormas = respuesta.normaTypes;
      console.log(this.tipoNormas);
    }).catch((err) => {
      console.log(err);
    });
  }
}
