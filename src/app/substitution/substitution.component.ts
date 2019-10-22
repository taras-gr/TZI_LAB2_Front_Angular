import { Component, OnInit } from '@angular/core';
import { VigenereModel } from "./VigenereModel";
import { HttpServiceSubstitution } from './http.service';

@Component({
  selector: 'app-substitution',
  templateUrl: './substitution.component.html',
  styleUrls: ['./substitution.component.css']
})
export class SubstitutionComponent {

  inputText : string;
    outputText : string;
    alphabet : string = " .,;-'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password : string;

    inputMessage : VigenereModel = new VigenereModel();

    recivedMessage : VigenereModel = new VigenereModel();

    done: boolean = false;
    constructor(private httpService: HttpServiceSubstitution){}

    encrypt(inputMessage: VigenereModel){
      console.log("in encrypt");
        if (this.alphabet != undefined && this.alphabet != '' &&
            this.inputText != undefined && this.inputText != '' &&
            this.password != undefined && this.password != '')
        {
          inputMessage.message = this.inputText;
          inputMessage.alphabet = this.alphabet;
          inputMessage.password = this.password;

            this.httpService.encryptPost(inputMessage)
                    .subscribe(
                        (data: VigenereModel) => {console.log(data); this.outputText=data.message; this.done=true;},
                        error => console.log(error)
                    );   
        }  
        else 
        {
            alert("Fill all required fields!!!");
        }       
    }

    decrypt(inputMessage: VigenereModel){
          if (this.alphabet != undefined && this.alphabet != '' &&
          this.inputText != undefined && this.inputText != '' &&
          this.password != undefined && this.password != '')
      {
        inputMessage.message = this.inputText;
        inputMessage.alphabet = this.alphabet;
        inputMessage.password = this.password;

          this.httpService.decryptPost(inputMessage)
                  .subscribe(
                      (data: VigenereModel) => {this.outputText=data.message; this.done=true;},
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
        this.password = '';
        this.alphabet = '';
    }

}
