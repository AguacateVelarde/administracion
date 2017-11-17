import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



var config = {
    apiKey: "AIzaSyC9t39KkbZK-bQKqY0vNL75-UoaZL4s6lo",
    authDomain: "ingenieria-de-software-58b22.firebaseapp.com",
    databaseURL: "https://ingenieria-de-software-58b22.firebaseio.com",
    projectId: "ingenieria-de-software-58b22",
    storageBucket: "ingenieria-de-software-58b22.appspot.com",
    messagingSenderId: "315897376876"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
   AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
