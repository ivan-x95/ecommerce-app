import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, ToastController,
} from '@ionic/angular';
import { PRODUCTS, Product } from '../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  ],
})
export class ProductDetailsPage {
  private route = inject(ActivatedRoute);
  private toast = inject(ToastController);

  product: Product =
    PRODUCTS.find(p => p.id === Number(this.route.snapshot.paramMap.get('id'))) ?? PRODUCTS[0];

  async addToCart() {
    const t = await this.toast.create({
      message: `${this.product.name} added to cart!`,
      duration: 1500,
      color: 'success',
    });
    await t.present();
  }
}