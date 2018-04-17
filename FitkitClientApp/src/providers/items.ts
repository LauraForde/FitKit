import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";


import 'rxjs/add/operator/map';

import { person } from '../objects/person'

@Injectable()
export class itemData{

    constructor(public http: Http){ }

    getItems(){
        return this.http.get("http://54.68.14.217:5000/people")
        .map(response =>response.json());
    }
}