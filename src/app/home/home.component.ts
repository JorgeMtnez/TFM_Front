import { Component } from '@angular/core';
import { FormUserService } from '../form-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private http: HttpClient,
    private FormUserService: FormUserService
    ) {}
  title: string = 'safe-street';

  dataRecived: boolean = this.FormUserService.getDataRecivedValue();
  ngAfterViewInit(){
    this.dataRecived = this.FormUserService.getDataRecivedValue();
  }
}
