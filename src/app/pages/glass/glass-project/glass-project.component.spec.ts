import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassProjectComponent } from './glass-project.component';

describe('GlassProjectComponent', () => {
  let component: GlassProjectComponent;
  let fixture: ComponentFixture<GlassProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlassProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
