import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnablComponent } from './editnabl.component';

describe('EditnablComponent', () => {
  let component: EditnablComponent;
  let fixture: ComponentFixture<EditnablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditnablComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditnablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
