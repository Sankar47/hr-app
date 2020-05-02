import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  apiUrl = 'https://sharehobby.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/auth/signup', JSON.stringify(data), {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        }),
      })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  addHobby(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/hobby/create', JSON.stringify(data), {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
      })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getHobbies() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/api/hobby/listall').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
