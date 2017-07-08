import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MenuController ,NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  providers: []
})
export class MyApp {
  @ViewChild('content') nav: NavController
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public MenuCtrl: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  doLogout() {
    localStorage.removeItem('userData');
    this.rootPage = LoginPage;
    this.MenuCtrl.close();
    this.nav.push(LoginPage);

  }
}

