import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Announcement from '../../models/announcement.interface';
import { AnnouncementService } from '../../services/announcement.service';
import { EquipmentIconPipe } from '../../pipes/equipment-icon.pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [EquipmentIconPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private announcementService = inject(AnnouncementService)
  announcementId: string | null = null;
  id:Number |null =null;
  announcement: Announcement | null =null;
  isLoading = false;

  ngOnInit(): void {

    this.announcementId = this.route.snapshot.paramMap.get('id');
    if (this.announcementId) {
      this.id = parseInt(this.announcementId);
      this.getAnnouncement();
    }
  }
  getAnnouncement() {
    this.isLoading = true;
    if(this.id){
      this.announcementService.getAnnouncement(this.id).subscribe({
        next: (data) => {
          this.isLoading = false;
          this.announcement = data;
          console.log(this.announcement);
        }
      });  
    }
  }



}
