import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent {
  editedProduct: any; // Define a property to hold the edited product

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize the edited product with a copy of the original data
    this.editedProduct = { ...data.product };
  }

  saveChanges(): void {
    // Implement logic to save changes and pass the edited product back to the caller
    this.dialogRef.close(this.editedProduct);
  }

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
