import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sellerName: string = 'John Doe'; // Replace with actual seller name
  sellerEmail: string = 'john@example.com'; // Replace with actual seller email
  showProfileDropdown: boolean = false;

  toggleProfileDropdown(): void {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  signOut() {
    // Implement sign out logic, e.g., navigate to home page
  }
}
