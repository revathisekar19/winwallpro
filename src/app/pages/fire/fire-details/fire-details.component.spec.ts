import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDetailsComponent } from './fire-details.component';

describe('FireDetailsComponent', () => {
  let component: FireDetailsComponent;
  let fixture: ComponentFixture<FireDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
