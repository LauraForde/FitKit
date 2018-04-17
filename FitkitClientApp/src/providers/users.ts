import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";


import 'rxjs/add/operator/map';


@Injectable()
export class userData{

    constructor(public http: Http){ }

    getUsers(){
        return this.http.get("http://54.68.14.217:5000/people")
        .map(response =>response.json());
    }
}