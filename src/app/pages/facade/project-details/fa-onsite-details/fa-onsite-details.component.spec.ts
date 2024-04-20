import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaOnsiteDetailsComponent } from './fa-onsite-details.component';

describe('FaOnsiteDetailsComponent', () => {
  let component: FaOnsiteDetailsComponent;
  let fixture: ComponentFixture<FaOnsiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaOnsiteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaOnsiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
