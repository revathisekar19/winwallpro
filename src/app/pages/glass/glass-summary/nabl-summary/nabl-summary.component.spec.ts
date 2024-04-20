import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NablSummaryComponent } from './nabl-summary.component';

describe('NablSummaryComponent', () => {
  let component: NablSummaryComponent;
  let fixture: ComponentFixture<NablSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NablSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NablSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
