// body.component.ts
import { Component } from '@angular/core';

interface Product {
  item: string;
  category: string;
  subcategory: string;
  description: string;
  date: string;
  time: string;
  buyer: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  products: Product[] = [];
  editedProduct: Product = {} as Product;
  searchCategory: string = '';
  searchSubcategory: string = '';
  searchDescription: string = ''; 

  showEditModal: boolean = false;
  
  addProduct(newItem: string, newCategory: string, newSubcategory: string, newDescription: string) {
    const newProduct: Product = {
      item: newItem,
      category: newCategory,
      subcategory: newSubcategory,
      description: newDescription,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      buyer: 'New Buyer',
      status: 'Processing',
      image: 'path_to_your_image.png'
    };

    this.products.unshift(newProduct);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  editProduct(index: number, updatedProduct: Product) {
    this.products[index] = updatedProduct;
  }

  editProductModal(product: Product) {
    this.editedProduct = { ...product }; // Make a copy of the product being edited
    this.showEditModal = true;
  }

  saveEdit() {
    // Find the index of the edited product in the products array
    const index = this.products.findIndex(product => product === this.editedProduct);

    if (index !== -1) {
      // Update the product with edited values
      this.products[index] = { ...this.editedProduct };

      this.showEditModal = false;
      this.clearEditFields();
    }
  }

  cancelEdit() {
    this.showEditModal = false;
    this.clearEditFields();
  }

   clearEditFields() {
    this.editedProduct = {} as Product;
  }



  toggleStatus(product: Product): void {
    product.status = product.status === 'Processing' ? 'Shipped' : 'Processing';
  }

  filterProducts(): Product[] {
    return this.products.filter(product =>
      product.category.toLowerCase().includes(this.searchCategory.toLowerCase()) &&
      product.subcategory.toLowerCase().includes(this.searchSubcategory.toLowerCase()) &&
      product.description.toLowerCase().includes(this.searchDescription.toLowerCase()) // Include description in filtering
    );
  }
}
