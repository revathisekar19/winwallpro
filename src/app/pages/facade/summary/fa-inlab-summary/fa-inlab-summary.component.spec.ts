import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaInlabSummaryComponent } from './fa-inlab-summary.component';


describe('FaInlabSummaryComponent', () => {
  let component: FaInlabSummaryComponent;
  let fixture: ComponentFixture<FaInlabSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaInlabSummaryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FaInlabSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
