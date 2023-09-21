import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  // razes = ['Asian','North American','African','UNK','Latin American'];
  // sex = ['M','F','X'];
  razes = ['Asian','North American','African','Other','Latin American'];
  sex = ['Male','Female','No comment'];

  model = new User('Nombre Apellido', this.sex[0], 0, this.razes[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User('', '',17,'');
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
