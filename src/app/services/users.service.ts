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
     return this.http.post(this._url, data);
   }

  getData():Observable<any>{
   return this.http.get<any>(this._url)
  }
  
  deleteData(id: string):Observable <any>
  {
    return this.http.delete(this._url+'/'+id)
  }

  putData(data:any){
      return this.http.put(this._url +'/'+data.id, data)
  }
}

