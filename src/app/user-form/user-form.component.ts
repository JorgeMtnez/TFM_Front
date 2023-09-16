import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  razes = ['Asian','North American','African','UNK','Latin American'];
  sexes = ['M','F','X'];

  model = new User('Dr. IQ', this.sexes[0], 23, this.razes[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new User('', '',17,'');
  }
}
