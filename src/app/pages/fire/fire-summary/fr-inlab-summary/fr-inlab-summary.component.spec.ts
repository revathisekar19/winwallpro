import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrInlabSummaryComponent } from './fr-inlab-summary.component';

describe('FrInlabSummaryComponent', () => {
  let component: FrInlabSummaryComponent;
  let fixture: ComponentFixture<FrInlabSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrInlabSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrInlabSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
