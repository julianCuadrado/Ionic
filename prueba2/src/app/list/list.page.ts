import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  public items: Array<{ title: string; note: string; avatar: string }> = [];
  
  constructor(private actionSheetController: ActionSheetController, private alertController: AlertController) {
    for (let i = 1; i < 15; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      });
    }
  }

  async  openActionsSheet(){
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          const alert = await this.alertController.create({
            header: 'Confirma',
      message: '¿Realmente desea eliminar este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
          })
          await alert.present();
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
