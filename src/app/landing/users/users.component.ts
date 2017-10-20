import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  idEdit: any;
  descriptionEdit: any;
  nameEdit: any;
  idErase: any;
  name: string;
  tipoNormas: any;

  constructor(public userServices: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userServices.getUsers().then((user) => {
      const respuesta = JSON.parse(user['_body']);
      this.tipoNormas = respuesta.normaTypes;
    }).catch((err) => {
      console.log(err);
    });
  }

  saveUser(myForm: NgForm) {
    const postParams = {
      name : myForm.value.name,
      descripcion: myForm.value.description
    };

    this.userServices.newUser(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      $('#addModal').modal('hide');
      this.getUsers();
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteUser() {
    this.userServices.deleteUser(this.idErase).then((user) => {
      const respuesta = JSON.parse(user['_body']);
      $('#deleteModal').modal('hide');
      this.getUsers();
    }).catch((err) => {
      console.log(err);
    });
  }

  updateUser(editForm: NgForm) {
    const postParams = {
      id: this.idEdit,
      name : editForm.value.nameEdit,
      descripcion: editForm.value.descriptionEdit
    };
    this.userServices.updateUser(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      $('#editModal').modal('hide');
      this.getUsers();
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
  }

}
