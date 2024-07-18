import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  postData(value:any){
    return this.http.post(' http://localhost:3000/posts/',value);
  }

  getData(value:any){
    return this.http.get('http://localhost:3000/posts/',value);
    
  }

  putData(id:number){
    return this.http.put('http://localhost:3000/posts/id',id);
  }

  
deleteData(id:any){
    return this.http.delete('http://localHost:3000/posts/'+id)
}
}

