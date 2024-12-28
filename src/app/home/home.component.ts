import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { CollectionComponent } from "../collection/collection.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProfileComponent, MatButtonModule, CollectionComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public showCollection: boolean = false;

  showCollectionToggle() {
    this.showCollection  = !this.showCollection;
  }
  
}
