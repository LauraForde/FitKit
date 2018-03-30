import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";


import 'rxjs/add/operator/map';

import { person } from '../objects/person'

@Injectable()
export class peopleData{

    constructor(public http: Http){ }

    getPeople(){
        return this.http.get("http://54.68.14.217:5000/people")
        .map(response =>response.json());
    }
    /*
    getPerson(name: String){
        return this.http.get("http://54.68.14.217:5000/people" + "/" + name)
        .map(response =>response.json());
    }*/

}