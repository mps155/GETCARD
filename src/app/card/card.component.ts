import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card: any
  @Input() fromModal: boolean = false

  constructor(private dialog: MatDialog) {}

  getImgUrl(group: string) {
    return `assets/cars/${group.toUpperCase()}.webp`
  }

  openModal(): void {
    this.dialog.open(CardDetailsComponent, {
      width: '400px',
      disableClose: false, 
      data: this.card
    });
  }

}
