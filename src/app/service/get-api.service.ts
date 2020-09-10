import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 

interface mockapi {
  id: any;
  name: string;
  isDone: boolean;

}
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

    api :'https://5f1454452710570016b37e52.mockapi.io/api/todos'
   
    constructor(private http :HttpClient) { }

     getdata(): Observable<mockapi>{
      console.log("api fun is work");
        return this.http.get<mockapi>(this.api)

    }
    
    

}
