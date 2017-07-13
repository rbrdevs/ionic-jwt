import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://ionic-jwt.dev/server/slim-api/public/users/';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: Http) {

  }

  getUsers() {  
    return new Promise((resolve, reject) => {
      let userData = JSON.parse(localStorage.getItem('userData'));
      let options = new RequestOptions();     
      if (userData && userData.token) {
        options.headers = new Headers();
        options.headers.append('Authorization', 'Bearer ' + userData.token);     
      }

      this.http.get(apiUrl,options ).subscribe( res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
      
    });
  }

}
