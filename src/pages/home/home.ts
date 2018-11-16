import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";



  constructor( public dialogService: InputDialogServiceProvider, public dataService: GroceriesServiceProvider, public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Item - ", item.name);
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    this.dataService.removeItem(index);
    toast.present();
  }

  addItem() {
    this.dialogService.prompt();
  }

  editItem(item, index) {
    this.dialogService.prompt(item, index);
  }

  
}


