import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisDetailsComponent } from './bis-details.component';

describe('BisDetailsComponent', () => {
  let component: BisDetailsComponent;
  let fixture: ComponentFixture<BisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
