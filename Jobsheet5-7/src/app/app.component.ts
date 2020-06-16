import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from '../providers/database/database';

declare var FCMPlugin;


@Component({
 templateUrl: 'app.html'
})

export class MyApp {
initialieApp() {
    this.statusBar.overlaysWebView(true);
    if (this.platform.is('android')) {
    this.statusBar.backgroundColorByHexString("#33000000");
    }
    }
rootPage:any = LoginPage;
constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private databaseProvider: DatabaseProvider) {
    this.initialieApp();
    this.databaseProvider.createDatabase(); {
 platform.ready().then(() => {
 // Okay, so the platform is ready and our plugins are available.
 // Here you can do any higher level native things you might need.
 this.statusBar.styleDefault();
 this.splashScreen.hide();
 FCMPlugin.onTokenRefresh(function (token) {
 //alert(token);
 });

 FCMPlugin.getToken(function (token) {
 //alert(token);
 });

 //subscripe topic, aplikasi akan menerima notif berdasarkan topik
 //yang dikirim.
 //bagian ini bisa kita isi dengan email setiap user agar server
 //dapat mengirim notif pada user tertentu
 FCMPlugin.subscribeToTopic('promosi'); 
 });
 }
}
}