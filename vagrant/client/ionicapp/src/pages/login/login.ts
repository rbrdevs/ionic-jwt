import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  private showLoginForm: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    let me = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loading.present();
    this.authService.postData({ user: 'user'}, 'auth/token').then( (result:any) => {
      if (result && result.token) {
        localStorage.setItem('userData',JSON.stringify(result));
        this.navCtrl.setRoot(HomePage);
      } else
        loading.dismiss();
    }).catch(function (err) {
      localStorage.removeItem('userData');
      loading.dismiss();
      me.showLoginForm = true;
    })


  } 


  signUp() {
    this.authService.postData({ user: 'user'}, 'auth/login').then( (result) => {
      console.log(result);
      localStorage.setItem('userData',JSON.stringify(result));
      this.navCtrl.setRoot(HomePage);
    });
  }
}
