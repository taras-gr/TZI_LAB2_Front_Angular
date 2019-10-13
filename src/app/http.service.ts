import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DecryptedMessage} from './decryptedMessage';
import { EncryptedMessage } from './encryptedMessage';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/PostUser  ASP.NET Core MVC
    //http://localhost:8080/angular/setUser.php     PHP
     
    encryptPost(decryptedMessage: DecryptedMessage){
         
        const body = {
            DecryptedText: decryptedMessage.decryptedText, 
            Alphabet: decryptedMessage.alphabet,
            Key: decryptedMessage.key
            };
        return this.http.post('https://localhost:44318/api/encrypt', body); 
    }

    decryptPost(encryptedMessage: EncryptedMessage){
         
        const body = {
            encryptedText: encryptedMessage.encryptedText, 
            Alphabet: encryptedMessage.alphabet
            };
        return this.http.post('https://localhost:44318/api/decrypt', body); 
    }
}