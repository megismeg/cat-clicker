import { Component } from '@angular/core';

import { Cat, CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cat Clicker';
  catsName: string[];
  selectedCat: Cat;
  // this flag is used to show or hide the 'cat-form' component.
  isAddingNewCat: boolean;
  
  constructor(private catService: CatService) {
    this.selectCat('Dolly');
    this.updateCatsName();
  }
  
  updateCatsName() {
    this.catsName = this.catService.getCatsName();
  }
  
  selectCat(name: string) {
    this.catService.getCat(name).then(cat => this.selectedCat = cat);
  }
  
  closeCatForm($event: string) {
    this.selectCat($event ? $event : this.selectedCat.name);
    this.updateCatsName();
    this.isAddingNewCat = false;
  }  
}
