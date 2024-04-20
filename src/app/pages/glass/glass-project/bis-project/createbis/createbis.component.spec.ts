import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebisComponent } from './createbis.component';

describe('CreatebisComponent', () => {
  let component: CreatebisComponent;
  let fixture: ComponentFixture<CreatebisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatebisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatebisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
