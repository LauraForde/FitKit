import { Component } from '@angular/core';

import { newTaskPage } from '../newTask/newTask';
import { mapPage } from '../map/map';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = newTaskPage;
  tab3Root = mapPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
