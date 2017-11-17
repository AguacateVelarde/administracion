import { DomSanitizer  } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {  AuthProviders, AuthMethods } from 'angularfire2/auth/';
//import { AngularFire } from 'angularfire2/';
//import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/Rx';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  title = 'app';
  dataProductos: any;
  costo:number;
  constructor(public af: AngularFireDatabase,
              private sanitizer: DomSanitizer
  ){
    this.getData();
    this.costo = 0;

  }

  getCosto( add: number ){
    let cost = add;
    this.costo+=cost;
  }

  getData(  ) {
      this.dataProductos = this.af.list( "pedido" );
 }

 getStyle( activate: boolean) {
   const style = `background-color: red`;;
   const style2 = `background-color: blue`;

   // sanitize the style expression

   return ( activate )? this.sanitizer.bypassSecurityTrustUrl( style2 ) : this.sanitizer.bypassSecurityTrustStyle(style);

 }


}
