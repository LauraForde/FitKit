import { Component } from '@angular/core';

import { gymBuddyPage } from '../gymBuddy/gymBuddy'
import { saleItemsPage } from '../saleItems/saleItems';
import { mapPage } from '../map/map';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = saleItemsPage;
  tab3Root = gymBuddyPage;
  tab4Root = mapPage;
  tab5Root = ProfilePage;

  constructor() {}
}
