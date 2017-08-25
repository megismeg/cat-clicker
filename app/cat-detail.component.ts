import { Component, Input } from '@angular/core';

import { Cat } from './cat.service';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent {
  @Input() cat: Cat;
  
  clickCat() {
    this.cat.clickedNum ++;
  }
}