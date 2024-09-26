import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../../services/dog-service.service';

@Component({
  selector: 'app-dog-photo',
  standalone: true,
  imports: [],
  templateUrl: './dog-photo.component.html',
  styleUrl: './dog-photo.component.scss'
})
export class DogPhotoComponent implements OnInit {

  page: any;

  constructor(private dogService: DogServiceService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  private getDogs() {
    this.dogService.getDogs().subscribe({
      next: (response: any) => {
        this.page = response;
      }
    })
  }

}
