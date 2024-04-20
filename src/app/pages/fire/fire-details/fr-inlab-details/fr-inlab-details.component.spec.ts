import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrInlabDetailsComponent } from './fr-inlab-details.component';

describe('FrInlabDetailsComponent', () => {
  let component: FrInlabDetailsComponent;
  let fixture: ComponentFixture<FrInlabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrInlabDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrInlabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
