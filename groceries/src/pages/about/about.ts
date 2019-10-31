import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title = "Welcome to the About Us Page!";


  constructor(public navCtrl: NavController) {

  }

}
