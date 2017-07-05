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

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {  
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let options = new RequestOptions({ headers: headers});
      
      this.http.get(apiUrl+type, options ).subscribe( res => {
          resolve(res.json());
      }, (err) => {
        reject(err);
      });
      
    });
  }

}
