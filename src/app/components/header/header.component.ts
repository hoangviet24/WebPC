import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;
  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  dropdownStates = {
    pcVanPhong: false,
    pcGaming: false
  };

  toggleDropdown(dropdown: keyof typeof this.dropdownStates) {
    this.dropdownStates[dropdown] = !this.dropdownStates[dropdown];
    // Đóng các dropdown khác
    for (let key in this.dropdownStates) {
      if (key !== dropdown) {
        this.dropdownStates[key as keyof typeof this.dropdownStates] = false;
      }
    }
  }
}
