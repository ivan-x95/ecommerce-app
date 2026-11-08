export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 1499, description: 'Bluetooth over-ear headphones with deep bass.', image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { id: 2, name: 'Smart Watch', price: 2999, description: 'Fitness tracking and notifications on your wrist.', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { id: 3, name: 'Backpack', price: 899, description: 'Water-resistant backpack with laptop compartment.', image: 'https://images.unsplash.com/photo-1680039211156-66c721b87625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { id: 4, name: 'Running Shoes', price: 2499, description: 'Lightweight, breathable shoes for daily runs.', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { id: 5, name: 'Water Bottle', price: 349, description: 'Insulated stainless steel bottle, 750 ml.', image: 'https://plus.unsplash.com/premium_photo-1681284938505-62efa3494bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
];