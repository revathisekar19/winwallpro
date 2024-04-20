import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSummaryComponent } from './fire-summary.component';

describe('FireSummaryComponent', () => {
  let component: FireSummaryComponent;
  let fixture: ComponentFixture<FireSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
