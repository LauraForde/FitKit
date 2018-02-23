import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-newTask',
  templateUrl: 'newTask.html'
})
export class newTaskPage {

todos: string[] = [];
todo: string;

  constructor(public navCtrl: NavController) {

  }
  
  addTask() {
    console.log("something worked");
    this.todos.push(this.todo);
    this.todo = "";
}
    delete(item){
        var index = this.todos.indexOf(item, 0);
        if(index > -1){
        this.todos.splice(index, 1);
        }
    }
}
