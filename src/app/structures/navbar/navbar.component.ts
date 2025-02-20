import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  /**
   *
   */
  constructor(private router: Router) {
   
    
  }
  navigate(url: string){
    this.router.navigate([url])
  }
  
}
