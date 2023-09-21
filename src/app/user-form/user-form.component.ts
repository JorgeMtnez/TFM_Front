import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup } from "@angular/forms"
import { DatePipe, formatDate, Location  } from '@angular/common';
import { FormUserService } from '../form-user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(
    private FormUserService: FormUserService, 
    private location: Location,
    private router: Router
    ){}
  // razes = ['Asian','North American','African','UNK','Latin American'];
  // sex = ['M','F','X'];
  razes = ['Asian','North American','African','Other','Latin American'];
  sex = ['Male','Female','No comment'];

  model = new User('Nombre Apellido', this.sex[0], 18, this.razes[0]);

  submitted = false;
  personForm = new FormGroup({
    name: new FormControl("Bob"),
    age: new FormControl(100),
    sex: new FormControl("Male"),
    raze: new FormControl("Asian")

  })
  onSubmit() {
    this.submitted = true; 
    const currentDate = new Date();
    const mes = formatDate(currentDate, 'MM', 'en-US');
    const hora = formatDate(currentDate, 'HH', 'en-US');
    console.log(this.personForm.value);
    console.log(this.personForm.value.name)
    console.log(hora)
    this.FormUserService.doPredict(
      this.personForm.value.age,
      this.personForm.value.sex,
      this.personForm.value.raze,
      mes,
      hora
    )
    // window.location.reload();
  }


  newUser() {
    this.model = new User('', '',17,'');
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
