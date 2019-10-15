import { Component} from '@angular/core';
import { HttpService} from './http.service';
import {DecryptedMessage} from './decryptedMessage';
import { EncryptedMessage } from './encryptedMessage';
   
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HttpService]
})
export class AppComponent { 
    inputText : string;
    outputText : string;
    alphabet : string = " .,;-'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    key : number;
   
    decryptedMessage : DecryptedMessage = new DecryptedMessage();
    encryptedMessage : EncryptedMessage = new EncryptedMessage();
      
    recivedDecryptedMessage: DecryptedMessage = new DecryptedMessage();
    recivedEncryptedMessage: EncryptedMessage = new EncryptedMessage();

    done: boolean = false;
    constructor(private httpService: HttpService){}

    encrypt(decryptedMessage: DecryptedMessage){

        if (this.alphabet != undefined && this.alphabet != '' &&
            this.inputText != undefined && this.inputText != '' &&
            this.key != undefined && this.key != null)
        {
            decryptedMessage.alphabet = this.alphabet;
            decryptedMessage.decryptedText = this.inputText;
            decryptedMessage.key = this.key;

            this.httpService.encryptPost(decryptedMessage)
                    .subscribe(
                        (data: DecryptedMessage) => {this.outputText=data.decryptedText; this.done=true;},
                        error => console.log(error)
                    );   
        }  
        else 
        {
            alert("Fill all required fields!!!");
        }       
    }

    decrypt(encryptedMessage: EncryptedMessage){
        if (this.alphabet != undefined && this.alphabet != '' &&
            this.inputText != undefined && this.inputText != '')
        {
            encryptedMessage.alphabet = this.alphabet;
            encryptedMessage.encryptedText = this.inputText;

            this.httpService.decryptPost(encryptedMessage)
                    .subscribe(
                        (data: EncryptedMessage) => {this.outputText=data.encryptedText; this.done=true;},
                        error => console.log(error)
                    );      
        }   
        else 
        {
            alert("Fill all required fields!!!");
        }      
    }

    clearIO(){
        this.inputText = '';
        this.outputText = '';
    }

    clearAll(){
        this.clearIO();
        this.key = undefined;
        this.alphabet = '';
    }
}