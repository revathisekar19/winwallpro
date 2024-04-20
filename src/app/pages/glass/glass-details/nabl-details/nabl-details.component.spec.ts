import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NablDetailsComponent } from './nabl-details.component';

describe('NablDetailsComponent', () => {
  let component: NablDetailsComponent;
  let fixture: ComponentFixture<NablDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NablDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NablDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
