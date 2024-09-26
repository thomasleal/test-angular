import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPhotoComponent } from './dog-photo.component';

describe('DogPhotoComponent', () => {
  let component: DogPhotoComponent;
  let fixture: ComponentFixture<DogPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
