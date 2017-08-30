import { Component, OnInit } from '@angular/core';

import { Cat, CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cat Clicker';
  catsName: string[];
  selectedCatName: string;
  isAddingNewCat: boolean;
  
  constructor(private catService: CatService) {
    this.selectedCatName = 'Dolly';
    this.catService.newCatName$.subscribe(catName => this.catsName.push(catName));
  }
  
  ngOnInit() {
    this.selectCat(this.selectedCatName);
    this.updateCatsName();
  }
  
  updateCatsName() {
    this.catsName = this.catService.getCatsName();
  }
  
  selectCat(name: string) {
    this.selectedCatName = name;
    this.catService.selectCat(name);
  }
  
  closeCatForm($event: string) {
    this.isAddingNewCat = false;
    if ($event) {
      this.selectCat($event);
    }
  } 
}
