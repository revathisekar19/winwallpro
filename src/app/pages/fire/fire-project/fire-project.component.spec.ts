import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireProjectComponent } from './fire-project.component';

describe('FireProjectComponent', () => {
  let component: FireProjectComponent;
  let fixture: ComponentFixture<FireProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
