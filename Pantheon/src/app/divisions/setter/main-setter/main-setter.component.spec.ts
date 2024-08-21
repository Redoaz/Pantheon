import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSetterComponent } from './main-setter.component';

describe('MainSetterComponent', () => {
  let component: MainSetterComponent;
  let fixture: ComponentFixture<MainSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
