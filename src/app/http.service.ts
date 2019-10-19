import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DecryptedMessage} from './decryptedMessage';
import { EncryptedMessage } from './encryptedMessage';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
     
    encryptPost(decryptedMessage: DecryptedMessage){
         
        const body = {
            DecryptedText: decryptedMessage.decryptedText, 
            Alphabet: decryptedMessage.alphabet,
            Key: decryptedMessage.key
            };
        return this.http.post('https://localhost:44318/api/ceasar/encrypt', body); 
    }

    decryptPost(encryptedMessage: EncryptedMessage){
         
        const body = {
            encryptedText: encryptedMessage.encryptedText, 
            Alphabet: encryptedMessage.alphabet
            };
        return this.http.post('https://localhost:44318/api/ceasar/decrypt', body); 
    }
}