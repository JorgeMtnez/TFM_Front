import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeLAService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://127.0.0.1:5000';
  getTest(): string {
    return "asdasdad";
  }
  getValue(number: number): string{
    switch (number){
      case 1 : return '#6ac728' ;
      case 2 : return '#e9fc17' ;
      case 3 : return '#fcb717' ;
      case 4 : return '#fc6b17' ;
      case 5 : return '#fc1717' ;
      break;
      default: return "#e81014";
    }
  }

  getColorByZipCode(zipCode: string): Observable<{data: string}> {
    const url = `${this.baseUrl}/getColor?zipcode=${zipCode}`;
    const responseData = this.http.get<string>(url);
    // const color = responseData;
    console.log(responseData)
    return this.http.get<{data: string}>(url);
  }
  
}
