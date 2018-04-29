import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { Person } from "../objects/person";



import 'rxjs/add/operator/map';


@Injectable()
export class userData{

    constructor(public http: Http, public storage: Storage,  public events: Events){ }

    login(user: Person){
        //Save user to storage, trigger login in event
        this.storage.set('hasLoggedIn', true);

        this.events.publish('user:login');
      }
    
    getUsers(){
        return this.http.get("http://54.68.14.217:5000/people")
        .map(response =>response.json());
    }

    addUser(user: string){
        console.log(user);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://54.68.14.217:5000/reg", user, 
        {
          headers: headers
        })
        .map(response => response.json());

      }

    deletePerson(id: String){
        return this.http.delete("http://54.68.14.217:5000/deletePerson" + "/" + id )
        .map(response =>response.json());
    }

    updateUser(user: Person){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://54.68.14.217:5000/people' + "/" + user.username, JSON.stringify(user), 
        {
          headers: headers
        })
        .map(res => res.json());
    }


     getUser(user: Person){
         console.log(user)
        return this.http.get('http://54.68.14.217:5000/login' + "/" + user)
        .map(res => res.json());
      }
}