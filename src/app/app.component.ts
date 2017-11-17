import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'parent-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
  }
  
  /**
   * Log The User Out And Clear All the Sessions
   */
  logout() {
    this.authService.logout();
  }
}
