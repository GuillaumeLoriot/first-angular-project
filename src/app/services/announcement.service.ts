import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Announcement from '../models/announcement.interface';
import SearchFilters from '../models/searchFilters.interface';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {


  private apiUrl = 'http://localhost:8000/api/announcements';
  private http = inject(HttpClient);
  id: Number | null = null;

  constructor() { }


  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl, { headers: { 'accept': 'application/json' } });
  }

  getAnnouncement(id: Number): Observable<Announcement> {

    return this.http.get<Announcement>(this.apiUrl + '/' + id, { headers: { 'accept': 'application/json' } });

  }

  searchAnnouncements(filters: Partial<SearchFilters>): Observable<Announcement[]> {
    let params = new HttpParams;

    if (filters.city != null) {
      params = params.set('city', filters.city);
    }
    if (filters.dailyPrice != null) {
      params = params.set('dailyPrice[lte]', filters.dailyPrice.toString());
    }
    if (filters.maxClient != null) {
      params = params.set('maxClient[gte]', filters.maxClient.toString());
    }

    return this.http.get<Announcement[]>(this.apiUrl, { headers: { accept: 'application/json' }, params });

  }

}
