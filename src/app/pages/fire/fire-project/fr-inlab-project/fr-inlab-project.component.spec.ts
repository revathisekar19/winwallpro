import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrInlabProjectComponent } from './fr-inlab-project.component';

describe('FrInlabProjectComponent', () => {
  let component: FrInlabProjectComponent;
  let fixture: ComponentFixture<FrInlabProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrInlabProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrInlabProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
