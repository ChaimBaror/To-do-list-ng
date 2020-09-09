import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/service/to-do.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyLIstComponent implements OnInit {
myList$ :Observable<object>
  constructor(private ser: ToDoService) { }

  ngOnInit(): void {
    this.myList$ = this.ser.getList();
  }
  delete(id){
    console.log(id);
    
    this.ser.deleteItmes(id)
  }
  edit(){}
  done(){}

}
