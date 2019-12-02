import { Component, OnInit } from '@angular/core';
import { VigenereModel } from '../vigenere/VigenereModel';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent {

  inputText : string;
    outputText : string;
    alphabet : string = " .,;-'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password : string;

    done: boolean = false;
    constructor(){}

    encrypt(inputMessage: VigenereModel){
      let p = 23;
      let q = 37;
      let n = p * q;
      let fn = Math.abs(p - 1) * Math.abs(q - 1);
      let e = 5;
      let d;
      for (let i = 0; i < fn; i++) {
          if ((i * e) % fn === 1) {
              d = i;
              break;
          }
      }
      let openKey = [n, e];
      let closeKey = [n, d];
      console.log(openKey);
      console.log(closeKey);

      //ENCODE
      let text = this.inputText;
      let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
          'W', 'X', 'Y', 'Z', ' ', '.', ',', ';', '-', "'"];
      let text_numbers = [];
      while (text.length % 3 !== 0) {
          text += ' ';
      }
      for (let i = 0; i < text.length; i++) {
          for (let j = 0; j < abc.length; j++) {
              if (text[i] === abc[j]) {
                  text_numbers.push(abc.indexOf(abc[j]));
              }
          }
      }
      let text_numbersByThree = [];
      for (let i = 0; i < text_numbers.length; i++) {
        text_numbersByThree[i] = '' + text_numbers[i];
      }
      for (let i = 0; i < text_numbersByThree.length; i++) {
          if(text_numbersByThree[i].length === 1) {
              text_numbersByThree[i] = '0' + text_numbersByThree[i];
          }
      }
      let text_numbersByThreeByText = [];
      for (let i = 0; i < text_numbersByThree.length; i = i + 3) {
      text_numbersByThreeByText.push(text_numbersByThree[i] + text_numbersByThree[i+1]+ text_numbersByThree[i+2]);
      }
      let encode = '';
      for (let i = 0; i < text_numbersByThreeByText.length; i++) {
          let leftPart = +(text_numbersByThreeByText[i][0] + text_numbersByThreeByText[i][1] + text_numbersByThreeByText[i][2]);
          let rightPart = +(text_numbersByThreeByText[i][3] + text_numbersByThreeByText[i][4] + text_numbersByThreeByText[i][5]);
          if (i < text_numbersByThreeByText.length - 1) {
              encode += megaPow(leftPart, e, n) + ' ';
              encode += megaPow(rightPart, e, n) + ' ';
              // console.log(i);
              // // console.log(megaPow(leftPart, e, n));
              // // console.log(megaPow(rightPart, e, n));
          } else {
              encode += megaPow(leftPart, e, n) + ' ';
              encode += megaPow(rightPart, e, n);
          }
      }
      function megaPow(num, power, mod) {
          let rest = 1;
          for (let i = 0; i < power; i++) {
              rest = rest * num;
              rest = rest % mod;
          }
          return rest;
      }
      this.outputText = encode;
      console.log("Encoded text:", encode);

    }

    decrypt(inputMessage: VigenereModel){
      let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
          'W', 'X', 'Y', 'Z', ' ', '.', ',', ';', '-', "'"];
      let p = 23;
      let q = 37;
      let n = p * q;
      let fn = Math.abs(p - 1) * Math.abs(q - 1);
      let e = 5;
      let d;
      for (let i = 0; i < fn; i++) {
          if ((i * e) % fn === 1) {
              d = i;
              break;
          }
      }
      let openKey = [n, e];
      let closeKey = [n, d];
      console.log(openKey);
      console.log(closeKey);
      let codedText = this.inputText.split(' ');
      let temp = [];
      for (let i = 0; i < codedText.length; i++) {
          temp.push(megaPow(codedText[i], d, n).toString());
      }
      for (let i = 0; i < temp.length; i++) {
          if(temp[i].length === 2) {
              temp[i] = '0'+ temp[i];
          }
          if(temp[i].length === 1) {
              temp[i] = '00'+ temp[i];
          }
      }
      let temp2 = [];
      for (let i = 0; i < temp.length; i=i+2) {
          temp2.push(temp[i] + temp[i+1]);
      }
      let temp3 = [];
      for (let i = 0; i < temp2.length; i++) {
          temp3.push(+(temp2[i][0] + temp2[i][1]));
          temp3.push(+(temp2[i][2] + temp2[i][3]));
          temp3.push(+(temp2[i][4] + temp2[i][5]));
      }
      let decode = '';
      for (let i = 0; i < temp3.length; i++) {
          decode += abc[temp3[i]];
      }
      console.log("Decoded text:", decode);
      this.outputText = decode;
      function megaPow(num, power, mod) {
        let rest = 1;
        for (let i = 0; i < power; i++) {
            rest = rest * num;
            rest = rest % mod;
        }
        return rest;
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
