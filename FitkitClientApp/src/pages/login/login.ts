import { Component } from '@angular/core';
import { NavController ,  AlertController, App} from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { userData } from '../../providers/users'
import { LoginForm } from '../../objects/loginForm';
import { regexValidators } from '../validators/validator';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private loginForm: LoginForm;

  constructor(public navCtrl: NavController, private http:Http ,public userData: userData, 
    private formBuilder: FormBuilder,  public alertCtrl: AlertController, public app: App) {
    
    this.setLoginFormNull();

  }

  


  setLoginFormNull(){
    this.loginForm = {
      username: null,
      password: null
    }
  }


}
