import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@HostListener('window:resize', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isMenuOpen = false;

  onResize(event: any) {
    if (event.target.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  navMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

/*
https://codepen.io/munjewar/pen/jQrNWw
https://codepen.io/syahrizaldev/pen/QWmdGwe
https://codepen.io/HumayunK01/pen/oNPmNQP?editors=1100
*/
