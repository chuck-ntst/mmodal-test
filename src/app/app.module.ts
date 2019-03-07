import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { FluencyDirectComponent } from './fluency-direct/fluency-direct.component';
import { ClientPictureComponent } from './client-picture/client-picture.component';
import { FluencyDirect2Component } from './fluency-direct2/fluency-direct2.component';

@NgModule({
  declarations: [
    AppComponent,
    FluencyDirectComponent,
    ClientPictureComponent,
    FluencyDirect2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
