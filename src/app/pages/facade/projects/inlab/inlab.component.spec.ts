import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlabComponent } from './inlab.component';

describe('InlabComponent', () => {
  let component: InlabComponent;
  let fixture: ComponentFixture<InlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
