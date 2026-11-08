import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
  IonList, IonItem, IonLabel,
} from '@ionic/angular';
import { PRODUCTS } from '../data/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
    IonList, IonItem, IonLabel,
  ],
})
export class CartPage {
  items = [
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[4], quantity: 2 },
    { product: PRODUCTS[2], quantity: 1 },
  ];
  shipping = 50;

  get subtotal() {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }
  get total() {
    return this.subtotal + this.shipping;
  }
}