import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsessionComponent } from './mainsession.component';

describe('MainsessionComponent', () => {
  let component: MainsessionComponent;
  let fixture: ComponentFixture<MainsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainsessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
