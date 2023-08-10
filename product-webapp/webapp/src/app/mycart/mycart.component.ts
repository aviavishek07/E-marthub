

import { Component } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {
  items: any[] = [
    { name: 'Item 1', price: 10, image: 'item1.jpg' },
    { name: 'Item 2', price: 15, image: 'item2.jpg' },
    { name: 'Item 3', price: 20, image: 'item3.jpg' },
    // Add more items as needed
  ];

  cart: any[] = [
    { name: 'Item 1', price: 10, image: 'item1.jpg' },
    { name: 'Item 2', price: 15, image: 'item2.jpg' },
    { name: 'Item 3', price: 20, image: 'item3.jpg' },
    { name: 'Item 1', price: 10, image: 'item1.jpg' },
    { name: 'Item 2', price: 15, image: 'item2.jpg' },
    { name: 'Item 3', price: 20, image: 'item3.jpg' },
    // You can add items to the temporary cart for testing
  ];
 
  total: number = 0;

  constructor() {
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.updateTotal();
  }
  updateQuantity(index: number, newQuantity: number): void {
    if (index >= 0 && index < this.cart.length && newQuantity >= 0) {
      this.cart[index].quantity = newQuantity;
      this.updateTotal();
    }
  }
  updateTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.itemQuantity, 0);
  }

 
  
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
  clearCart(): void {
  this.cart = [];
}
  
  checkout(): void {
    // Simulate a checkout process here (e.g., payment, order processing, etc.)
    // For this example, we'll simply clear the cart.
    
    
  }

  
  
}
