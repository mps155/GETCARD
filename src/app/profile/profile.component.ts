import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-profile',
  imports: [MatTooltipModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((res) => {
      this.user = res;
    });
  }
}
