import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatDetailComponent } from './cat-detail.component';
import { CatFormComponent } from './cat-form.component';

import { CatService } from './cat.service';

@NgModule({
  declarations: [
    AppComponent,
    CatDetailComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
