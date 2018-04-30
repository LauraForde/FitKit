
import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";


import 'rxjs/add/operator/map';

import { Person } from '../objects/person'
import { Item } from '../objects/item'

@Injectable()
export class itemData{

    constructor(public http: Http){ }
    // 172.31.28.9:2020

    url: String = "172.31.28.9:2020";

    getItems(){
        return this.http.get("http://54.68.14.217:5000/shop")
        .map(response =>response.json());
    }



    addItem(item: string){
        console.log(item);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://54.68.14.217:5000/newPost", item, 
        {
          headers: headers
        })
        .map(response => response.json());

      }

    deleteItem(id: String){
        return this.http.delete("http://54.68.14.217:5000/person" + "/" + name)
        .map(response =>response.json());
    }
}