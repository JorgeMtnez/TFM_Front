import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  razes = ['Asian','North American','African','UNK','Latin American'];
  sex = ['M','F','X'];

  model = new User('Dr. IQ', this.sex[0], 23, this.razes[0]);

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
