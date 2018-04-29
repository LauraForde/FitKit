import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { saleItemsPage } from '../pages/saleItems/saleItems';
import {gymBuddyPage} from '../pages/gymBuddy/gymBuddy';
import { mapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import {peopleData } from '../providers/people'
import {itemData } from '../providers/items'
import { Geolocation } from '@ionic-native/geolocation';
import { userData } from '../providers/users';

@NgModule({
  declarations: [
    MyApp,
    gymBuddyPage,
    saleItemsPage,
    HomePage,
    TabsPage,
    mapPage,
    LoginPage,
    RegisterPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    gymBuddyPage,
    saleItemsPage,
    HomePage,
    mapPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    userData,
    peopleData,
    itemData,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
