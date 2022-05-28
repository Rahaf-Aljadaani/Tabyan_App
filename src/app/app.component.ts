import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.initializeApp();

  }

  initializeApp() {

    // just new user see it
   if (!localStorage.getItem('welcome')) {
      localStorage.setItem('welcome', 'true');
    this.router.navigateByUrl('/welcome');
   }
  }
}
