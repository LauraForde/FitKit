import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";


import 'rxjs/add/operator/map';

//import { person } from '../objects/person'

@Injectable()
export class peopleData{

    constructor(public http: Http){ }

    getPeople(){
        return this.http.get("http://54.68.14.217:5000/people")
        .map(response =>response.json());
    }
    /*
    getPerson(name: String){
        return this.http.get("http://54.68.14.217:5000/person" + "/" + name)
        .map(response =>response.json());
    }*/
    
    //method to save user to db
    /*addPerson(person: any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.post("http://54.68.14.217:5000/person", person, {
            headers: headers
        })
        .map(response =>response.json());
    }
*/
/*
n: String;
p: String;

addPerson(JSON.stringify({ name: n, password: p }))

or 

p = {
    name: undefined,// or null or ""
    password: undefined
}

addPerson(JSON.stringify(p))
*/

//addPerson(JSON.stinify({name;}))
   /* addPerson(person: any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.post("http://54.68.14.217:5000/person", person, {
            headers: headers
        })
        .map(response =>response.json());
    }*/


        /*
        n: String;
        p: String;
        _ID: sT... rev

        addPerson(JSON.stringify({ name: n, password: p }))

        or 

        p = {
            name: undefined,// or null or ""
            password: undefined
        }

        addPerson(JSON.stringify(p))
        */

    /* updatePerson(person: any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.update("http://54.68.14.217:5000/person", person, {
            headers: headers
        })
        .map(response =>response.json());
    }*/




    /* 
    deleting user
    
    deletePerson(name: String){
        return this.http.delete("http://54.68.14.217:5000/person" + "/" + name)
        .map(response =>response.json());
    }*/
}