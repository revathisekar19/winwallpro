import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbisComponent } from './editbis.component';

describe('EditbisComponent', () => {
  let component: EditbisComponent;
  let fixture: ComponentFixture<EditbisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditbisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
