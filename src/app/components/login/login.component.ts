import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);
  private router = inject(Router)
  isSubmitted = false;
  isLoading = false;
  token = '';

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log('submited');
      this.userService.login(this.loginForm.value).subscribe({
        next: (data) => {
          localStorage.setItem('token', data.token);
          console.log(data.token);
          this.isLoading = false;
          this.router.navigate(['/profile']);
        },
        error: () => {
        
        console.log('Une erreur est survenue')
        this.isLoading = false;

      },
      });

      //   setTimeout(() => {

      //   this.isLoading = false;
      //   alert('Connexion réussie');

      // }, 2000);

    }


  }


  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['email']) return `${fieldName} doit être au format email`;
      if (field.errors['required']) return `${fieldName} est obligatoire`;
      if (field.errors['minlength']) { return `Maximum ${field.errors['minlength'].requiredLength} caractères`; }
    }
    return '';
  }

}
