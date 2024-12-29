import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { CollectionComponent } from "../collection/collection.component";
import { CommonModule } from '@angular/common';
import { ShowroomComponent } from "../showroom/showroom.component";

@Component({
  selector: 'app-home',
  imports: [ProfileComponent, MatButtonModule, CollectionComponent, CommonModule, ShowroomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public showCollection: boolean = false;
  public showroomCollection: boolean = false;

  collectionToggle() {
    this.showCollection  = !this.showCollection;
    this.showroomCollection  = false;
  }

  showroomToggle() {
    this.showroomCollection  = !this.showroomCollection;
    this.showCollection  = false;
  }

  loadMenu() {
    this.showCollection  = false;
    this.showroomCollection  = false;
  }
  
}
