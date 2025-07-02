import { Component, Input } from '@angular/core';
import Announcement from '../../models/announcement.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-announcement-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './announcement-item.component.html',
  styleUrl: './announcement-item.component.css'
})
export class AnnouncementItemComponent {

  @Input() announcement: Announcement | null = null; 

}
