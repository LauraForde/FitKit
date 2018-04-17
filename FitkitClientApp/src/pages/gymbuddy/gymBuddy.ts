import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http , Headers} from '@angular/http';

import { userData} from '../../providers/users'

@Component({
  selector: 'page-gymBuddy',
  templateUrl: 'gymBuddy.html'
})
export class gymBuddyPage {

    users: any;

    constructor(public navCtrl: NavController, public userData: userData, private http: Http, 
        public navParams: NavParams) {
        this.getUsers();
      }
    getUsers()
    {
      this.userData.getUsers().subscribe(
        data => this.users = data,
        err => console.log("error"),
        () => console.log("fin")
      );
    }
} 
