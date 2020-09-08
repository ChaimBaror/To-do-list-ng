import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  favorite: string = ""
  constructor(private ser: ToDoService) { }

  toList() {
    console.log(this.favorite);
    if (this.favorite != "") {
      this.ser.addToList(this.favorite)
      console.log("b", this.favorite);
      this.favorite = ""
    }
  }
  ngOnInit(): void {
  }

}
