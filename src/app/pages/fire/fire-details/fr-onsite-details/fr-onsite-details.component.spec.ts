import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrOnsiteDetailsComponent } from './fr-onsite-details.component';

describe('FrOnsiteDetailsComponent', () => {
  let component: FrOnsiteDetailsComponent;
  let fixture: ComponentFixture<FrOnsiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrOnsiteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrOnsiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
