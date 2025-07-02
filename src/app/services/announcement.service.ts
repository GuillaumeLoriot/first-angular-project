import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Announcement from '../models/announcement.interface';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }

  private apiUrl = 'http://localhost:8000/api/announcements';
  private http = inject(HttpClient);
  id: Number | null = null;

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl,{ headers :{'accept' : 'application/json'}});   
  }

    getAnnouncement(id: Number): Observable<Announcement> {

        return this.http.get<Announcement>(this.apiUrl+'/'+id,{ headers :{'accept' : 'application/json'}});   

  }
}
