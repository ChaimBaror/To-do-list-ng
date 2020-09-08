import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ToDoListComponent } from './compnnts/to-do-list/to-do-list.component';
import { MyLIstComponent } from './compnnts/my-list/my-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    MyLIstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
