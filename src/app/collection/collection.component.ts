import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CollectionService } from './services/collection.service';
import { CardComponent } from '../card/card.component';
import { ListHeaderComponent } from '../list-header/list-header.component';

export interface CardData {
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-collection',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CardComponent,
    ListHeaderComponent
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'matched',
        style({
          visibility: 'false',
          transform: 'scale(0.05)',
          opacity: 0,
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')]),
      transition('* => matched', [animate('400ms')]),
    ]),
  ],
})
export class CollectionComponent implements OnInit {
  @Output() backToMenu = new EventEmitter<boolean>();

  public cardList: any[] = [];
  public cardListDefault: any[] = [];
  public spinCards: any[] = [];
  public loading: boolean = true;

  data: CardData[] = [
    {
      state: 'default',
    },
    {
      state: 'default',
    },
    {
      state: 'default',
    },
    {
      state: 'default',
    },
    {
      state: 'default',
    },
  ];

  constructor(private collectionService: CollectionService) {}
  ngOnInit(): void {
    this.getAllCards();
  }

  toggleFlip(i: number) {
    if (this.data[i].state === 'default') {
      this.data[i].state = 'flipped';
    }
  }

  getCardsFromSpin() {
    this.collectionService.spinFirstCollection().subscribe((res: any) => {
      this.spinCards = res.cardList;
      this.saveNewCards();
    });
  }

  saveNewCards() {
    const groupList = this.spinCards.map((card) => card.group);
    this.collectionService.register(groupList).subscribe({
      next: () => {},
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

  backToCollection() {
    this.getAllCards();
  }

  getAllCards() {
    this.collectionService.getAllCards().subscribe((res: any) => {
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
