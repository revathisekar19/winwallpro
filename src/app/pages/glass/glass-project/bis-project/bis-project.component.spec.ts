import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisProjectComponent } from './bis-project.component';

describe('BisProjectComponent', () => {
  let component: BisProjectComponent;
  let fixture: ComponentFixture<BisProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
