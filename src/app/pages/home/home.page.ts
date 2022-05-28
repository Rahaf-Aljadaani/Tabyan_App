import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slidesOptions = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -60,
  };
  constructor(private route: Router) {}
  back(){
    this.route.navigate(['/login']);
  }

  playWithAI(){
    this.route.navigate(['/play-with-ai']);
  }
  qize(){
    this.route.navigate(['/meanings']);
  }
  search(){
    this.route.navigate(['/search']);
  }

}
