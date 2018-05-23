import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';


import { AppComponent } from './app.component';
import { BusinessFormComponent } from './business-form/business-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
