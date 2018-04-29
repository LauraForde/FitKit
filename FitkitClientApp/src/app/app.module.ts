import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

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
import { AuthProvider } from '../providers/auth/auth';
import { EmailProvider } from '../providers/email/email';
import { ImageProvider } from '../providers/image/image';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';


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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

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
    Camera,
    EmailComposer,
    userData,
    peopleData,
    itemData,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EmailProvider,
    ImageProvider,
    Storage
  ]
})
export class AppModule {}
