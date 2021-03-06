import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';
import { InitPage } from '../pages/init/init';
import { timer } from 'rxjs/observable/timer';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InitPage;

  showSplash = true;

  pages: Array<{ title: string, icon?: string, component?: any, func?: Function }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Página Inicial', component: InitPage },
      { title: 'Login', component: LoginPage },
      { title: 'Sair', func: this.logout }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /*Realiza logout*/
  logout() {
    // this.dadosProvider.setAuthToken(null);
    this.nav.setRoot(InitPage);
  }

}
