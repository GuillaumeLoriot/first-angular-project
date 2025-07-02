import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RedirectCommand, Router } from '@angular/router';
import User from '../../models/user.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

userService: UserService = inject(UserService);
token = localStorage.getItem('token');
private router = inject(Router)
user:User | null = null;
isLoading = false;

ngOnInit(): void {
  if(this.token){
this.isLoading=true;
    this.userService.getUser(this.token).subscribe({
        next: (data) => {
          this.user = data;
          this.isLoading = false;
          ;
        }
      });  
  }
  else{
    alert('pas de jwt token présent');
    this.router.navigate(['/login']);
  }
}

}
