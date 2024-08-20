import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionheaderComponent } from './sessionheader.component';

describe('SessionheaderComponent', () => {
  let component: SessionheaderComponent;
  let fixture: ComponentFixture<SessionheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
