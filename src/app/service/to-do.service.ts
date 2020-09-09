import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface items {
  id: number;
  name: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  list$ = new BehaviorSubject<items[]>(null)
  itme: items[] = []
  constructor() { }

  addToList(v) {
    this.itme.push({ name: v, id: Math.floor(Math.random() * 10000), isDone: false })
    this.list$.next(this.itme)
  }

  deleteToList() { }

  getList(): Observable<object> {
    return this.list$.asObservable()
  }

  deleteItmes(id) {
    console.log("deleteItmes", id);
    const roomArr: any[] = this.list$.getValue();
    roomArr.forEach((item, index) => {
      if (item.id === id) { roomArr.splice(index, 1); }
    });
    this.list$.next(roomArr);
    console.log("deleteItmes", roomArr);
  }


}
