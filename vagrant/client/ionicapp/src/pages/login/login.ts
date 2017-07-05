import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  token: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
    if (this.authService.autenticated())
      this.navCtrl.push(HomePage);      

  }

  ionViewDidLoad() {
    console.log('ionV   iewDidLoad LoginPage');

  } 


  signUp() {
    this.authService.postData({ user: 'user'}, 'login').then( (result) => {
      console.log(result);
      localStorage.setItem('userData',JSON.stringify(result));
      //this.token = result?result.token:'';
      this.navCtrl.push(HomePage);
    });
  }
}
