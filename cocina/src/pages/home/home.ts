import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import{ Pedido } from  '../../providers/pedido';
import{ AuthProvider } from '../../providers/auth';
import{ DataProvider } from '../../providers/data';

import{ JumpPage } from '../jump/jump';
import{ CarritoPage }from '../carrito/carrito';
import { AuthPage } from '../auth/home/home';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {
  dataProductos: FirebaseListObservable<any>;
  constructor(
    private nav: NavController,
    private auth: AuthProvider,
    private data: DataProvider,
    public pedido: Pedido
  ) {
    this.dataProductos = this.data.list( "pedido" );
    console.log( this.dataProductos )
  }
  logout(){
    this.auth.logout();
    this.nav.push( AuthPage );

  }
  pushlist( uid: any, name: string, price: string ){
    this.data.push( uid, { 'nombre' : name, 'precio' : price });

  }

  add( nombre, precio, imagen){

    this.pedido.add(nombre, precio, imagen );
  }

  getCont( ){
    return this.pedido.cont;
  }
  pedir(  ){
    this.pedido.pedir();
  }
  getCarrito(){
    this.nav.push(CarritoPage);
  }
  Disable( item ){

    this.data.list('pedido').update(item, { completo: true });
  }
}
