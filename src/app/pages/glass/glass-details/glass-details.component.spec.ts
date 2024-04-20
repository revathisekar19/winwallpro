import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassDetailsComponent } from './glass-details.component';

describe('GlassDetailsComponent', () => {
  let component: GlassDetailsComponent;
  let fixture: ComponentFixture<GlassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
