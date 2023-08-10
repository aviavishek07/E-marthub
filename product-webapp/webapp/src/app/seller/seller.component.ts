import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service'; // Update the path
import { EditProductDialogComponent } from 'src/app/seller/edit-product-dialog/edit-product-dialog.component'; // Import the edit product dialog component


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']

})
export class SellerComponent {
  createProductForm: FormGroup;
  newProduct = {
    productId: '',
    productName: '',
    productPrice: 0,
    brand: '',
    productDescription: '',
    stockQuantity: 0,
    mrp: 0,
    sellingPrice: 0,
    productImage: null // You can use appropriate data type for handling image
  };

  dialogRef: MatDialogRef<EditProductDialogComponent> | null = null;

  showProfileDropdown = false; // Initialize the dropdown flag
  showDeleteConfirmation = false;
  productToDeleteId: string = ''; // Holds the ID of the product to delete


  sellerName: string = 'John Doe'; // Replace with actual seller name
  sellerEmail: string = 'john@example.com'; // Replace with actual seller email

  toggleProfileDropdown(): void {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  signOut(): void {
    // Implement your sign out logic
  }

  showConfirmModal = false;
  showEditModal = false;

  editedProduct: any = {}; // Initialize an empty editedProduct

  products: any[] = []; // Initialize the products array

  isDialogOpen = false;
  isSuccessPopupVisible = false;
  // Inside SellerComponent class
  productIdError: string | null = null;
  productNameError: string | null = null;
  // Define similar error variables for other form controls


  constructor(public dialog: MatDialog, private productService: ProductService,
    private formBuilder: FormBuilder) {
    this.createProductForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: [0, Validators.required],
      brand: ['', Validators.required],
      productDescription: ['', Validators.required],
      stockQuantity: [0, Validators.required],
      mrp: [0, Validators.required],
      sellingPrice: [0, Validators.required],
      productImage: [null, Validators.required]
    });
    this.productIdError = this.getErrorMessage('productId');
    this.productNameError = this.getErrorMessage('productName');
  }

  getErrorMessage(controlName: string): string {
    const control = this.createProductForm.get(controlName);

    if (control?.hasError('required')) {
      return 'This field is required';
    }

    // You can add more custom error messages here if needed
    return '';
  }

  saveEditProduct(): void {
    // Save the edited product logic here
    // For example, you can update the edited product in the products array:
    const index = this.products.findIndex(product => product.productId === this.editedProduct.productId);
    if (index !== -1) {
      this.products[index] = this.editedProduct;
    }

    // Show the confirmation modal
    this.showConfirmModal = true;
  }



  openEditDialog(product: any): void {
    this.newProduct = { ...product }; // Set the newProduct object to the selected product's data
    this.isDialogOpen = true; // Open the dialog for editing
  }

  onEdit(product: any): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: '400px',
      data: { product }
    });

    dialogRef.afterClosed().subscribe(updatedProduct => {
      if (updatedProduct) {
        const index = this.products.findIndex(p => p.productId === updatedProduct.productId);
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
        // Update the product or perform necessary actions
      }
    });
  }

  onDelete(productId: string): void {
    this.showDeleteConfirmation = true;
    this.productToDeleteId = productId;
  }

  // Method to confirm product deletion
  confirmDelete(): void {
    if (this.productToDeleteId) {
      // Call the service to delete the product
      this.productService.deleteProduct(this.productToDeleteId);
      // Reset flags
      this.showDeleteConfirmation = false;
      this.productToDeleteId = '';
    }
  }

  // Method to cancel product deletion
  cancelDelete(): void {
    this.showDeleteConfirmation = false;
    this.productToDeleteId = '';
  }

  // Define the onDelete function to handle product deletion
  // onDelete(productId: string): void {
  //   const confirmDelete = confirm('Are you sure you want to delete this product?');
  //   if (confirmDelete) {
  //     this.productService.deleteProduct(productId);
  //   }
  // }

  // onDelete(productId: string): void {
  //   console.log('Delete button clicked for product:', productId);

  //   const confirmDelete = confirm('Are you sure you want to delete this product?');
  //   if (confirmDelete) {
  //     console.log('Deleting product with ID:', productId);
  //     this.productService.deleteProduct(productId);
  //   }
  // }

  saveProduct(): void {
    // Implement logic to save the changes
    // Call the service to update the product or make any necessary updates
    // Once saved, close the dialog
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  // Close the currently open dialog
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  openCreateDialog(): void {
    this.isDialogOpen = true;
  }
  getProducts(): any[] {
    return this.productService.getProducts(); // Replace this with the actual method from your ProductService
  }


  createProduct(): void {

    this.products.push(this.newProduct); // Add newProduct to the products array
    this.newProduct = {
      productId: '',
      productName: '',
      productPrice: 0,
      brand: '',
      productDescription: '',
      stockQuantity: 0,
      mrp: 0,
      sellingPrice: 0,
      productImage: null
    }; // Reset newProduct
    this.showConfirmModal = false; // Close the confirmation modal
    this.isSuccessPopupVisible = true; // Show success popup
    // Form is valid, proceed with creating the product

  }


  showSuccessPopup(): void {
    this.isSuccessPopupVisible = true;
  }

  closeSuccessPopup(): void {
    this.isSuccessPopupVisible = false;
    // Optionally, reset form values and close the dialog
    this.isDialogOpen = false;
  }

  handleImageChange(event: any): void {
    // Implement logic to handle the selected image
    const file = event.target.files[0];
    this.newProduct.productImage = file;
  }

  updateProduct(product: any): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: '400px',
      data: { product } // Pass the product data to the dialog
    });

    dialogRef.afterClosed().subscribe(updatedProduct => {
      if (updatedProduct) {
        this.productService.updateProduct(updatedProduct);
      }
    });
  }

  deleteProduct(product: any): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.productService.deleteProduct(product.productId);
    }
  }

  addConfirmedProduct(): void {
    this.products.push(this.newProduct); // Add newProduct to the products array
    this.newProduct = {
      productId: '',
      productName: '',
      productPrice: 0,
      brand: '',
      productDescription: '',
      stockQuantity: 0,
      mrp: 0,
      sellingPrice: 0,
      productImage: null
    }; // Reset newProduct
    this.showConfirmModal = false; // Close the confirmation modal
  }

  editProduct(product: any): void {
    this.editedProduct = { ...product }; // Copy the selected product for editing
    this.showEditModal = true; // Show the edit modal
  }

  // Method to save edits from the edit modal
  saveEdit(): void {
    // Implement logic to save the edited product
    // Update the product in the products array
    this.showEditModal = false; // Close the edit modal
  }

  // Method to cancel edits and close the edit modal
  cancelEdit(): void {
    this.showEditModal = false; // Close the edit modal
  }
}
