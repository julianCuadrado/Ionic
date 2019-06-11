import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  public cartas: Array<{ title: string; subtitle: string; content: string }> = [];

  constructor() { 
    for (let i = 1; i < 11; i++) {
      this.cartas.push({
        title: 'Carta ' + i,
        subtitle: 'subtitulo N°' + i,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      });
    }
  }

  ngOnInit() {
  }

}
