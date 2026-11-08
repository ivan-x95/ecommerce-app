import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
  IonList, IonItem, IonInput, ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
    IonList, IonItem, IonInput,
  ],
})
export class CheckoutPage {
  private toast = inject(ToastController);
  private router = inject(Router);

  async checkout() {
    const t = await this.toast.create({
      message: 'Order placed successfully!',
      duration: 2000,
      color: 'success',
    });
    await t.present();
    this.router.navigate(['/home']);
  }
}