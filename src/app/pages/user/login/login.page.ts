import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signIn() {
    // how to save data from input to my varbels

    console.log('Logged in successfully',this.username);
    this.route.navigate(['/home']);
  }


}
