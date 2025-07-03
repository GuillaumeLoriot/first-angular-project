import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnnouncementService } from '../../services/announcement.service';
import Announcement from '../../models/announcement.interface';
import SearchFilters from '../../models/searchFilters.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private announcementSercice = inject(AnnouncementService)
  formBuilder: FormBuilder = inject(FormBuilder);
  searchForm: FormGroup;
  isSubmitted = false;
  @Output() searchResults = new EventEmitter<Announcement[]>();



  constructor() {
    this.searchForm = this.formBuilder.group({
      city: ['', []],
      dailyPrice: ['', [Validators.min(1), Validators.max(150)]],
      maxClient: ['', [Validators.min(1), Validators.max(30)]]
    });
  }


  onSubmit() {
    this.isSubmitted = true;
    if (this.searchForm.valid) {
      console.log('submited');
      const filters:Partial<SearchFilters> = this.searchForm.value;
      this.announcementSercice.searchAnnouncements(filters).subscribe({
        next: (data) => {
           console.log('next');
           console.log(data);
          this.searchResults.emit(data);
        },
        error: (error) => {
          console.error('Erreur API', error)
        }
      });
    }
  }


  isFieldInvalid(fieldName: string): boolean {
    const field = this.searchForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
    const field = this.searchForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['min']) return `${fieldName} doit être supérieur à ${field.errors['min'].min}`;
      if (field.errors['max']) { return `${fieldName} doit être inférieur à ${field.errors['max'].max}`; }
    }
    return '';
  }


}
