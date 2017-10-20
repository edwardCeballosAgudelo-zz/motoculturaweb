import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PuntosService } from '../../services/puntos.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {
  idErase: any;
  longitudEdit: any;
  latitudEdit: any;
  distanciaEdit: any;
  descriptionEdit: any;
  idEdit: any;
  nameEdit: any;
  puntosAccidentes: any;

  constructor(public puntoServices: PuntosService) { }

  ngOnInit() {
    this.getPuntosAccidentes();
  }

  getPuntosAccidentes() {
    this.puntoServices.getPuntosAccidentes().then((punto) => {
      const respuesta = JSON.parse(punto['_body']);
      this.puntosAccidentes = respuesta.accidentPoints;
      console.log(this.puntosAccidentes);
    }).catch((err) => {
      console.log(err);
    });
  }

  savePuntoAccidente(myForm: NgForm) {
    const postParams = {
      nombre : myForm.value.name,
      descripcion: myForm.value.description,
      longitud: myForm.value.longitud,
      latitud: myForm.value.latitud,
      distancia: myForm.value.distancia
    };

    this.puntoServices.newPuntoAccidente(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      $('#addModal').modal('hide');
      this.getPuntosAccidentes();
    }).catch((err) => {
      console.log(err);
    });
  }

  deletePuntoAccidente() {
    this.puntoServices.deletePuntoAccidente(this.idErase).then((typeNorma) => {
      const respuesta = JSON.parse(typeNorma['_body']);
      $('#deleteModal').modal('hide');
      this.getPuntosAccidentes();
    }).catch((err) => {
      console.log(err);
    });
  }

  updatePuntoAccidente(editForm: NgForm) {
    const postParams = {
      id: this.idEdit,
      name : editForm.value.nameEdit,
      descripcion: editForm.value.descriptionEdit
    };
    this.puntoServices.updatePuntoAccidente(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      $('#editModal').modal('hide');
      this.getPuntosAccidentes();
    }).catch((err) => {
      console.log(err);
    });
  }

  changeId(id) {
     this.idErase = id;
  }

  changeData(item) {
    this.idEdit = item._id;
    this.nameEdit = item.nombre;
    this.descriptionEdit = item.descripcion;
    this.longitudEdit = item.longitud;
    this.latitudEdit = item.latitud;
    this.distanciaEdit = item.distancia;
  }

}
