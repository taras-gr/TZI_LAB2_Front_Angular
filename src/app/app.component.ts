import { Component} from '@angular/core';
import { HttpServiceCeasar} from './ceasar/http.service';
import { HttpServiceVigenere } from './vigenere/http.service'
   
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HttpServiceCeasar, HttpServiceVigenere]
})
export class AppComponent { 
    
}