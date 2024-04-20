import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrOnsiteSummaryComponent } from './fr-onsite-summary.component';

describe('FrOnsiteSummaryComponent', () => {
  let component: FrOnsiteSummaryComponent;
  let fixture: ComponentFixture<FrOnsiteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrOnsiteSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrOnsiteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
