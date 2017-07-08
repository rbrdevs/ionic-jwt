import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://ionic-jwt.dev/server/slim-api/public/';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  constructor(private http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(data, type) {  
    return new Promise((resolve, reject) => {
      let userData = JSON.parse(localStorage.getItem('userData'));

      let options = new RequestOptions();     
      if (userData && userData.token) {
        console.log(userData.token);
        options.headers = new Headers();
        options.headers.append('Authorization', 'Bearer ' + userData.token);     
      }

      this.http.post(apiUrl+type, data, options ).subscribe( res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
      
    });
  }



  autenticated() {
    let userData = localStorage.getItem('userData');
    return (userData != undefined);
  }

}
