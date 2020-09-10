import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/service/to-do.service';
import { Observable } from 'rxjs';
import { GetApiService } from 'src/app/service/get-api.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyLIstComponent implements OnInit {
  myList$: Observable<object>
  mock = [] 
  constructor(private ser: ToDoService ,private mockapi:GetApiService) { }

  isHidden: boolean = true;
  click() {
    this.isHidden = !this.isHidden;
  }

  ngOnInit(): void {
    this.myList$ = this.ser.getList();
    this.mockapi.getdata().subscribe(ras =>
      console.log(ras)
    )
      // this.mock.push(ras))

    console.log("api is work", this.mock);
  }
  delete(id) {
    console.log(id);

    this.ser.deleteItmes(id)
  }
  edit() { }
  done() { }

}
