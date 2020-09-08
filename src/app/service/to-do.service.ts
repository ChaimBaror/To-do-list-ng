import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface items{
  id : number;
  name:string;
  isDone : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  list$ = new BehaviorSubject<items[]>(null)
  itme :items[] = [] 
  constructor() { }

  addToList(v) {
    this.itme.push({name:v, id : Math.floor(Math.random() * 10000),isDone :false})
    this.list$.next(this.itme)
  }

  deleteToList() { }

  getList(): Observable<object> {
    return this.list$.asObservable()
  }

  deleteItmes(id){

    for(var i = 0; i < this.list$[0].length; i++) {
      if(this.list$[i].id == id) {
        this.list$[i].splice(i, 1);
        console.log("delete",this.list$[i]);
          break;
      }
      console.log();
      
}}
}
