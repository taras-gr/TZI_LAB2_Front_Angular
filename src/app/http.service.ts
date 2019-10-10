import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/PostUser  ASP.NET Core MVC
    //http://localhost:8080/angular/setUser.php     PHP
     
    postData(user: User){
         
        const body = {name: user.name, age: user.age};
        return this.http.post('https://localhost:44341/api/values', body); 
    }
}