import { Component} from '@angular/core';
import { HttpService} from './http.service';
import {DecryptedMessage} from './decryptedMessage';
   
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    // template: `<div class="form-group">
    //                 <label>Имя</label>
    //                 <textarea name="username" [(ngModel)]="decryptedMessage.decryptedText"></textarea>
    //             </div>
    //             <div class="form-group">
    //                 <label>Имя</label>
    //                 <input class="form-control" name="username" [(ngModel)]="decryptedMessage.alphabet" />
    //             </div>
    //             <div class="form-group">
    //                 <label>Возраст</label>
    //                 <input class="form-control" type="number" name="age" [(ngModel)]="decryptedMessage.key" />
    //             </div>
    //             <div class="form-group">
    //                 <button class="btn btn-default" (click)="submit(decryptedMessage)">Отправить</button>
    //             </div>
    //             <div *ngIf="done">
    //                 <div>Получено от сервера:</div>
    //                 <div>Имя: {{recivedDecryptedMessage.decryptedText}}</div>
    //             </div>`,
    providers: [HttpService]
})
export class AppComponent { 
    inputText : string;
    alphabet : string;
    key : number;
   
    decryptedMessage : DecryptedMessage = new DecryptedMessage();
      
    recivedDecryptedMessage: DecryptedMessage; // полученный пользователь
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(decryptedMessage: DecryptedMessage){
        this.httpService.encryptPost(decryptedMessage)
                .subscribe(
                    (data: DecryptedMessage) => {this.recivedDecryptedMessage=data; this.done=true;},
                    error => console.log(error)
                );
    }
}