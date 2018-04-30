import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http , Headers} from '@angular/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {itemData} from '../../providers/items'
import { Item } from '../../objects/item';

@Component({
  selector: 'page-saleItems',
  templateUrl: 'saleItems.html'
})
export class saleItemsPage implements OnInit {

    post: Item;
    items: any;

    shopID: String;
    prodName: String;
    price: String;
    des: String;
    sellName: String;
    num: String;



    constructor(public navCtrl: NavController, public itemData: itemData, private http: Http, 
        public navParams: NavParams, private formBuilder: FormBuilder) {
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

   addItems()
  {
    this.itemData.addItem(JSON.stringify(this.post)).subscribe(
      data => {
        if(data.message === 'Saved'){
            this.resetItemDetails();
          console.debug(data.message);
        }
         
      },
      err => this.resetItemDetails(),
      () => console.log("fin")
    );
  }

  resetItemDetails(): void {
    this.items= {
      shopID: null,
      prodName: null,
      price: null,
      des: null,
      sellName: null,
      num: null

    }
  }

  ngOnInit(): void {

    this.resetItemDetails();
  }
} 
