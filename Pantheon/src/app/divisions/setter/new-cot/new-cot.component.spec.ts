import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCotComponent } from './new-cot.component';

describe('NewCotComponent', () => {
  let component: NewCotComponent;
  let fixture: ComponentFixture<NewCotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
