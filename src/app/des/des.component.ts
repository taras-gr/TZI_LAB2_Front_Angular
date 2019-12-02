import { Component, OnInit } from '@angular/core';
import { VigenereModel } from "./VigenereModel";
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent {

  inputText : string;
    outputText : string;
    alphabet : string = " .,;-'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password : string;

    inputMessage : VigenereModel = new VigenereModel();

    recivedMessage : VigenereModel = new VigenereModel();

    done: boolean = false;
    constructor(){}

    encrypt(inputMessage: VigenereModel){
      function encryptDesCbcPkcs7Padding(message, key) {
        let keyWords = CryptoJS.enc.Utf8.parse(key);
        let ivWords = CryptoJS.lib.WordArray.create([0, 0]);
        let encrypted = CryptoJS.DES.encrypt(message, keyWords, { iv: ivWords});
        return encrypted;//.toString(CryptoJS.enc.Utf8);
    }
    let plainText = this.inputText;
    let base64Coded = window.btoa(plainText);
    let encrypted = encryptDesCbcPkcs7Padding(base64Coded, this.password);
    let finalEncrypted = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    this.outputText = finalEncrypted;
    console.log("Final encrypted: ", finalEncrypted);
    function decryptDesCbcPkcs7Padding(message, key) {
        let keyWords = CryptoJS.enc.Utf8.parse(key);
        let ivWords = CryptoJS.lib.WordArray.create([0, 0]);
        let decrypted = CryptoJS.DES.decrypt({ciphertext: message}, keyWords, { iv: ivWords });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    
    let base64Decoded = CryptoJS.enc.Base64.parse(finalEncrypted);
    let decrypted = decryptDesCbcPkcs7Padding(base64Decoded, this.password);
    let finalDecrypted = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
    console.log("Final decrypted: ", finalDecrypted);
    
      console.log("in encrypt");
        if (this.alphabet != undefined && this.alphabet != '' &&
            this.inputText != undefined && this.inputText != '' &&
            this.password != undefined && this.password != '')
        {
          inputMessage.message = this.inputText;
          inputMessage.alphabet = this.alphabet;
          inputMessage.password = this.password;

            
        }  
        else 
        {
            alert("Fill all required fields!!!");
        }       
    }

    decrypt(inputMessage: VigenereModel){
      function encryptDesCbcPkcs7Padding(message, key) {
        let keyWords = CryptoJS.enc.Utf8.parse(key);
        let ivWords = CryptoJS.lib.WordArray.create([0, 0]);
        let encrypted = CryptoJS.DES.encrypt(message, keyWords, { iv: ivWords});
        return encrypted;//.toString(CryptoJS.enc.Utf8);
    }
    let plainText = this.inputText;
    let base64Coded = window.btoa(plainText);
    let encrypted = encryptDesCbcPkcs7Padding(base64Coded, this.password);
    let finalEncrypted = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    this.outputText = finalEncrypted;
    console.log("Final encrypted: ", finalEncrypted);
    function decryptDesCbcPkcs7Padding(message, key) {
        let keyWords = CryptoJS.enc.Utf8.parse(key);
        let ivWords = CryptoJS.lib.WordArray.create([0, 0]);
        let decrypted = CryptoJS.DES.decrypt({ciphertext: message}, keyWords, { iv: ivWords });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    
    let base64Decoded = CryptoJS.enc.Base64.parse(this.inputText);
    let decrypted = decryptDesCbcPkcs7Padding(base64Decoded, this.password);
    let finalDecrypted = CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
    console.log("Final decrypted: ", finalDecrypted);
    this.outputText = finalDecrypted;
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
