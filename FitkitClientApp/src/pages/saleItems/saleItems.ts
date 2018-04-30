import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http , Headers} from '@angular/http';

import {itemData} from '../../providers/items'

@Component({
  selector: 'page-saleItems',
  templateUrl: 'saleItems.html'
})
export class saleItemsPage {

    items: any;
    constructor(public navCtrl: NavController, public itemData: itemData, private http: Http, 
        public navParams: NavParams) {
        this.getItems();
      }
    
    getItems()
    {
      this.itemData.getItems().subscribe(
        data => this.items = data,
        err => console.log("error"),
        () => console.log("fin")
      );
    }
  
} 
