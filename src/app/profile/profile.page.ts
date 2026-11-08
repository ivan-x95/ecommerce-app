import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
  IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  ],
})
export class ProfilePage {
  customer = {
    name: 'James Ivan Santiago',
    email: 'MarkJaysonJaca@gmail.com',
    phone: '0967 123 6767',
    address: 'purok 12, Jaen, Nueva Ecija',
    memberSince: 'January 2024',
  };
}