import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  //Promt controller method for both Edit & Add item action - showPromt()
  showPromt(item?, index?) {
    const promt = this.alertCtrl.create({
      //Title for Promt
      title: item ? 'Edit Blog Post' : 'Add Blog Post',
      //Promt intro message
      message: item ? 'Please enter blog details' : 'Please enter blog details',
      //Promt Input elements
      inputs: [
        {
          name: 'title',
          placeholder: 'Enter Title',
          value: item ? item.title : null
        },
        {
          name: 'author',
          placeholder: 'Enter Author',
          value: item ? item.author : null
        },
        {
          name: 'date',
          placeholder: 'Enter Date',
          value: item ? item.date : null
        },
      ],
      //Promt Button elements
      buttons: [
        {
          text: 'Cancel',
          handler: data => {

          }
        },
        {

          text: 'Save Blog',
          handler: item => {
            if (index != undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]

    });
    promt.present();
  }

}
