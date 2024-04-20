import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaInlabDetailsComponent } from './fa-inlab-details.component';

describe('FaInlabDetailsComponent', () => {
  let component: FaInlabDetailsComponent;
  let fixture: ComponentFixture<FaInlabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaInlabDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaInlabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
