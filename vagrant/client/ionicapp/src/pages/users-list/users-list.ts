import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service'
import { LoginPage } from '../../pages/login/login'
/**
 * Generated class for the UsersListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {
  usersList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider) {
    this.userService.getUsers().then( (res:any) => {
       this.usersList = res; 
    }).catch( (err) => {
      if (err.status == 401) {
        this.navCtrl.push(LoginPage);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersListPage');
  }

}
