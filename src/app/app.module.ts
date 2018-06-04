import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppRoutingModule, routingComponents } from './app-routing.module'; 
import { BusinessService } from './business.service';
import { EzineComponent } from './ezine/ezine.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EzineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppBootstrapModule,
    AppRoutingModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
