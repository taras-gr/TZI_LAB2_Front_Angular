import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { VigenereModel } from "./VigenereModel";
  
@Injectable()
export class HttpServiceFeistel{
  
    constructor(private http: HttpClient){ }
     
    encryptPost(message: VigenereModel){
         
        const body = {
            Message: message.message, 
            Alphabet: message.alphabet,
            Password: message.password
            };
        return this.http.post('https://localhost:44318/api/feistel/encrypt', body); 
    }

    decryptPost(message: VigenereModel){
         
        const body = {
            Message: message.message, 
            Alphabet: message.alphabet,
            Password: message.password
            };
        return this.http.post('https://localhost:44318/api/feistel/decrypt', body);  
    }
}