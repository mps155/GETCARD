import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShowroomService } from './services/showroom.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-showroom',
  imports: [CommonModule, MatProgressSpinnerModule, ListHeaderComponent, CardComponent],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss',
})
export class ShowroomComponent implements OnInit {
  @Output() backToMenu = new EventEmitter<boolean>();
  public cardList: any[] = [];
  public cardListDefault: any[] = [];
  public loading: boolean = true;
  constructor(private showroomService: ShowroomService) {}

  ngOnInit(): void {
    this.showroomService.getAllCards().subscribe((res) => {
      this.cardList = res.cardList;
      this.cardListDefault = res.cardList;
      this.loading = false;
    });
  }
   
  setCardList($event: any) {
    this.cardList = $event;
    console.log($event);
  }
}
