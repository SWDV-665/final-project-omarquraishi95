import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { IBlogServiceProvider } from '../../providers/iblog-service/iblog-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Title for the App
  title= "Welcome to IBlog Inc.";


  //Constructor Method
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: IBlogServiceProvider, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {

  }

  //Load Items via a service
  loadItems(){
    return this.dataService.getItems();
  }

  //Action for Remove items functionality - removeItem()
  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Removing Blog: '+ item.title,
      duration: 3000 }
    );
    toast.present();
    //Remove item by Provider function
    this.dataService.removeItem(index);
  }
  //Action for Share items functionality - shareItem()
  shareItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Sharing Blog: '+ item.title,
      duration: 3000 }
    );
    toast.present();

    let message = "Blog Post - title: " + item.title + " - author: " + item.author;
    let subject = "Share via IBlog app";
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
    }).catch((error) => {
      console.error("Error while Sharing: ", error);
    });

  }
  //Action for Edit items functionality - removeItem()
  editItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Editing Blog: '+ item.title,
      duration: 2000 }
    );
    toast.present();
    //Edit item by Provider function
    this.inputDialogService.showPromt(item, index)
  }
  //Action for Add item functionality - addItem()
  addItem(){
    console.log("Adding Blog");
    //Change item by Provider function
   this.inputDialogService.showPromt();
  }




}
