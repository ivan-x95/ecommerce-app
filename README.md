# QuickShop - Ionic Angular E-Commerce App

A simple multi-page e-commerce app built with Ionic and Angular for a laboratory exercise on multi-page applications and routing. It uses static sample data only (no database or real payments).

## Features

- Home page with welcome message, promotion, and featured products
- Products page with 5 sample products (image, name, price, description)
- Product Details page with an Add to Cart button
- Cart page with sample items, quantities, subtotal, and total
- Profile page with sample customer information
- Checkout page with name, address, and contact number fields

## Tech Stack

- Ionic 9
- Angular (standalone components)
- TypeScript

## Routes

Configured in `src/app/app.routes.ts`:

| Path                   | Page             |
| ---------------------- | ---------------- |
| `/` (default)          | Redirects to Home |
| `/home`                | Home             |
| `/products`            | Products         |
| `/product-details/:id` | Product Details  |
| `/cart`                | Cart             |
| `/profile`             | Profile          |
| `/checkout`            | Checkout         |

Navigation between pages uses `routerLink`.

## Project Structure

```
src/app/
├── app.routes.ts
├── data/products.ts
├── home/
├── products/
├── product-details/
├── cart/
├── profile/
└── checkout/
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- Ionic CLI: `npm install -g @ionic/cli`

### Installation

```bash
git clone https://github.com/<your-username>/ecommerce-app.git
cd ecommerce-app
npm install
ionic serve
```

The app opens at `http://localhost:8100`.

## Screenshots

Screenshots are in the `screenshots/` folder.

## License

For educational use only.