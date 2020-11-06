import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BalotaComponent } from './balota/balota.component';
import { ParImparComponent } from './par-impar/par-impar.component';

@NgModule({
  declarations: [
    AppComponent,
    BalotaComponent,
    ParImparComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
