import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { VigenereModel } from "./VigenereModel";
  
@Injectable()
export class HttpServiceSubstitution{
  
    constructor(private http: HttpClient){ }
     
    encryptPost(message: VigenereModel){
         
        const body = {
            Message: message.message, 
            Alphabet: message.alphabet,
            Password: message.password
            };
        return this.http.post('https://localhost:44318/api/substitution/encrypt', body); 
    }

    decryptPost(message: VigenereModel){
         
        const body = {
            Message: message.message, 
            Alphabet: message.alphabet,
            Password: message.password
            };
        return this.http.post('https://localhost:44318/api/substitution/decrypt', body);  
    }
}