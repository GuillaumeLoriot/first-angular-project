import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user.interface';
import JwtToken from '../models/token.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private getUserApi = 'http://localhost:8000/api/me';
  private authApi = 'http://localhost:8000/auth';
  private http = inject(HttpClient);

  getUser(token:string): Observable<User> {
    return this.http.get<User>(this.getUserApi, { headers: { 'accept': 'application/json', 'Authorization': `Bearer ${token}` } });
  }

  login(user: Partial<User>):Observable<JwtToken> {
    return this.http.post<JwtToken>(this.authApi,  user );
  }

}
