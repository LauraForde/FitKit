import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, private http:Http) {
    
    

  }
  
  
  login(){
    this.http.get("http://54.68.14.217:5000/people").subscribe((response ) =>{
      console.log(response.json);
      
    })
  }

}
