import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  public form = [
    { val: 'Empleado', isChecked: true },
    { val: 'Secretaria', isChecked: false },
    { val: 'Administrador', isChecked: false }
  ];

  constructor(private modalCtrl:ModalController) { }

  cerrar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
