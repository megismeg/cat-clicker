import { Injectable } from '@angular/core';

export class Cat {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string,
    public clickedNum: number,
    public info?: string
  ) {}
}

let imageBaseUrl = '/assets/images/';

const cats: Cat[] = [
  new Cat(0, 'Dolly', imageBaseUrl + 'cat0.jpg', 0),
  new Cat(1, 'Winny', imageBaseUrl + 'cat1.jpg', 0),
  new Cat(2, 'Honey', imageBaseUrl + 'cat2.jpg', 0),
  new Cat(3, 'Lucky', imageBaseUrl + 'cat3.jpg', 0),
  new Cat(4, 'Sunny', imageBaseUrl + 'cat4.jpg', 0)
];

@Injectable()
export class CatService {
  
  cats = Promise.resolve(cats);
  
  getCatsName(): string[] {
    let catName = [];
    this.cats.then(cats => cats.forEach(cat => catName.push(cat.name)));
    return catName;
  }
  
  getCat(name: string): Promise<Cat> {
    return this.cats.then(cats => cats.find((cat: Cat) => cat.name === name));
  }
  
  addCat(name: string, imageUrl: string) {
    this.cats.then(cats => cats.push(
      new Cat(
        cats.length, 
        name,
        imageUrl,
        0)
    ));
  }
}