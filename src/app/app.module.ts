import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { IntroComponent } from './intro.component';
import { AboutComponent } from './about.component';
import { MentoringComponent } from './mentoring.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
    MentoringComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
