import { Person } from './../../objects/person';

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


import { userData } from '../../providers/users'
import { regexValidators } from '../validators/validator';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit {
  
  user: Person;

  firstname: String;
  surname: String;
  email: String;
  username: String;
  password: String;
  gender: String;
  dob: String;
  bio: String;


  regForm: FormGroup;


  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public userData: userData) {

    this.resetUserDetails();
    this.regForm = this.formBuilder.group({
      email: [
        '', Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.minLength(8),
          Validators.required
        ])
      ]
    });


  }

signUp()
  {
   console.log(this.user);
    this.userData.addUser(JSON.stringify(this.user)).subscribe(
      data => {
        if(data.message === 'Saved'){
            this.resetUserDetails();
          console.debug(data.message);
        }
         
      },
      err => this.resetUserDetails(),
      () => console.log("fin")
    );
  }

  resetUserDetails(): void {
    this.user= {
      firstname: null,
      surname: null,
      email: null,
      username: null,
      password : null,
      gender : null,
      dob: null,
      bio : null

    }
    
  }

  ngOnInit(): void {

    this.resetUserDetails();
  }
}
