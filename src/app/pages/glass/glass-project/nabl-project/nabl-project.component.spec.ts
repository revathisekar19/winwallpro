import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NablProjectComponent } from './nabl-project.component';

describe('NablProjectComponent', () => {
  let component: NablProjectComponent;
  let fixture: ComponentFixture<NablProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NablProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NablProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
