import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://ionic-jwt.dev/server/slim-api/public/';

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

  postData(credentials, type) {  
    return new Promise((resolve, reject) => {
      //let headers = new Headers();
      //let options = new RequestOptions({ headers: headers});     
      this.http.post(apiUrl+type, {} ).subscribe( res => {
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
