import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UsersListPage } from '../../pages/users-list/users-list';
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private authService: AuthServiceProvider) {
 
  }

  ionViewCanEnter() {
    return this.authService.autenticated();
  }

  listarUsuarios() {
    this.navCtrl.push(UsersListPage);
  }

}
