import { Component, Input } from '@angular/core';

import { Cat, CatService } from './cat.service';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent {
  cat: Cat;
  
  constructor(private catService: CatService) {
    catService.currentCat$.subscribe(cat => this.cat = cat);
  }
  
  clickCat() {
    this.cat.clickedNum ++;
  }
}