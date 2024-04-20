import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassSummaryComponent } from './glass-summary.component';

describe('GlassSummaryComponent', () => {
  let component: GlassSummaryComponent;
  let fixture: ComponentFixture<GlassSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlassSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
