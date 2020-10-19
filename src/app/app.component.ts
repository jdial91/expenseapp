import { Component, OnInit } from '@angular/core';

import { Platform, MenuController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyC72SvpTjUObriox8hp2Dd0Ax5MIxfedVU",
      authDomain: "expenseapp-e3d8e.firebaseapp.com",
      databaseURL: "https://expenseapp-e3d8e.firebaseio.com",
      projectId: "expenseapp-e3d8e",
      storageBucket: "expenseapp-e3d8e.appspot.com",
      messagingSenderId: "516232562777",
      appId: "1:516232562777:web:02c6aad996d60687ff8948",
      measurementId: "G-JFFYE7RZP5"  
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}
