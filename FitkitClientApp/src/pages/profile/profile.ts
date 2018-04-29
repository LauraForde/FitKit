import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { Http , Headers} from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { EmailProvider } from '../../providers/email/email';


import {peopleData} from '../../providers/people'


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
   
    ppl: any;

    private _attachment : any;
 
 
 

  constructor(public navCtrl: NavController, public peopleData: peopleData, 
    private http: Http, public navParams: NavParams,) 
  {
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
