import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrOnsiteProjectComponent } from './fr-onsite-project.component';

describe('FrOnsiteProjectComponent', () => {
  let component: FrOnsiteProjectComponent;
  let fixture: ComponentFixture<FrOnsiteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrOnsiteProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrOnsiteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
