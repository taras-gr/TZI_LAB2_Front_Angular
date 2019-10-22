import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { CeasarComponent } from './ceasar/ceasar.component';
import {FormsModule} from '@angular/forms';
import { HttpServiceCeasar } from './ceasar/http.service';
import { HttpServiceVigenere } from './vigenere/http.service'

import { HttpClientModule } from '@angular/common/http';
import { VigenereComponent } from './vigenere/vigenere.component';
import { SubstitutionComponent } from './substitution/substitution.component';
import { HttpServiceSubstitution } from './substitution/http.service';

@NgModule({
  declarations: [
    AppComponent,
    CeasarComponent,
    VigenereComponent,
    SubstitutionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpServiceCeasar, HttpServiceVigenere, HttpServiceSubstitution],
  bootstrap: [AppComponent]
})
export class AppModule { }
