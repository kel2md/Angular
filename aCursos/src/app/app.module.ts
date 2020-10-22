import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoHeaderComponent } from './curso-header/curso-header.component';
import { CursoFooterComponent } from './curso-footer/curso-footer.component';
import { CursoFormularioComponent } from './curso-formulario/curso-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoHeaderComponent,
    CursoFooterComponent,
    CursoFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
