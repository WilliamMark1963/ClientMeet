import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url='http://localhost:3000/users'
  constructor(private http: HttpClient) { }
  userSignUp(data:object)
   {
     return this.http.post(" http://localhost:3000/users", data);
   }
   getData():Observable<any>{
   return this.http.get<any>(this._url)
  }
  schedule(data:object)
  {
    return this.http.post("http://localhost:3000/schedule", data);
  }
  scheduleData():Observable<any>{
    return this.http.get<any>("  http://localhost:3000/schedule")
  }
}

 // this.http.get('http://localhost:3000/users').subscribe(data => {
    //   this.usersList.push(data)
    // });
    // console.log(this.usersList);