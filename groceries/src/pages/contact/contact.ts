import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  title = "Have Any Question? You can contact us below!";

  constructor(public navCtrl: NavController) {

  }

}
