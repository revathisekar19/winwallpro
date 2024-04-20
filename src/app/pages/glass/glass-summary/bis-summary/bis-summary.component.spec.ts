import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisSummaryComponent } from './bis-summary.component';

describe('BisSummaryComponent', () => {
  let component: BisSummaryComponent;
  let fixture: ComponentFixture<BisSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
