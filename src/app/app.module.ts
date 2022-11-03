import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import {HttpClientModule} from '@angular/common/http'








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    MoviedetailComponent,
 
    NavbarComponent,
 
    MoviecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
