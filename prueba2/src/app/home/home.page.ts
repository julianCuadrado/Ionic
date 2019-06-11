import { Component } from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarios: Array<{ nombre: string}> = [];

  constructor(private modalController: ModalController, private actionSheetController: ActionSheetController, 
    private alertController: AlertController) {
    for (let i = 1; i < 20; i++) {
      this.usuarios.push({
        nombre: 'Usuario ' + i
      });
    }
  }
  async lanzarModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: { value: 123 }
    });
    
    modal.present();
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
}
