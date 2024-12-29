import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

export enum OrderOptions {
  group = 1,
  marca = 2,
  cilindrada = 3,
  cilindros = 4,
  potencia = 5,
  velocidade = 6,
  aceleracao = 7,
  raridade = 8,
}

@Component({
  selector: 'app-list-header',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.scss',
})
export class ListHeaderComponent {
  @Output() backToMenu = new EventEmitter<boolean>();
  @Output() cardListOrdered = new EventEmitter<any>();
  @Output() cardListFiltered = new EventEmitter<any>();
  @Input() cardList: any[] = [];
  @Input() cardListDefault: any[] = [];

  orderCardList(value: number): any {
    const orderFilter = OrderOptions[value];
    console.log(this.cardList)
    if (orderFilter == 'padrao') return this.cardList;
    const cardListOrdered = this.cardList.sort((a, b) => {
      const aValue = a[orderFilter];
      const bValue = b[orderFilter];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      } else {
        return typeof aValue === 'number' ? -1 : 1;
      }
    });
    return cardListOrdered;
  }
}
