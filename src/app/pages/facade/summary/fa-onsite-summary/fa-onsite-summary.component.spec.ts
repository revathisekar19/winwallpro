import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaOnsiteSummaryComponent } from './fa-onsite-summary.component';


describe('FaOnsiteSummaryComponent', () => {
  let component: FaOnsiteSummaryComponent;
  let fixture: ComponentFixture<FaOnsiteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaOnsiteSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaOnsiteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
