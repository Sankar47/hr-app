import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiUrl = 'https://sharehobby.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials) {
    return new Promise((resolve, reject) => {
      
      this.http.post(this.apiUrl + '/api/auth/signin', JSON.stringify(credentials), {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }),
      })
      .subscribe(res => {
        console.log(res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });

  }  

}
