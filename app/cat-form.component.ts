import { Component, EventEmitter, Output } from '@angular/core';

import { CatService } from './cat.service';

@Component({
  selector: 'cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent {

  //using this EventEmitter to close the cat-form.
  @Output() onClose = new EventEmitter<string>();
  
  catName: string;
  imageUrl: string;
  
  constructor(private catService: CatService) {}
  
  add() {
    /*
     * since the validation is added in the template file,
     * those codes do not need anymore.
     *
    if (!this.catName || !this.imageUrl)
      return;
    */
    this.catService.addCat(this.catName, this.imageUrl);
    this.closeForm(this.catName);
  }
  
  cancel() {
    this.closeForm();
  }
  
  closeForm(name?: string) {
    this.onClose.emit(name);
  }
}
