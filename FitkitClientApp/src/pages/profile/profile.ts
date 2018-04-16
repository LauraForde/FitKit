import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http , Headers} from '@angular/http';

import {peopleData} from '../../providers/people'

import { person } from '../../objects/person'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    placeholder;

    ppl: any;

  constructor(public navCtrl: NavController, public peopleData: peopleData, private http: Http, 
    public navParams: NavParams) {
    this.getPerson();
  }
getPerson()
{
  this.peopleData.getPeople().subscribe(
    data => this.ppl = data,
    err => console.log("error"),
    () => console.log("fin")
  );
}



}
