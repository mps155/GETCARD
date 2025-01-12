import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-details',
  imports: [CommonModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
  public card: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.card = data;
   }

   getImgUrl(group: string) {
    return `assets/cars/${group.toUpperCase()}.webp`
  }

}
