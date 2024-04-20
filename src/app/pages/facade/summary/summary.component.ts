import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  public breadCrumbItems = [
    { label: 'Facade' },
    { label: 'Summary', active: true }
  ];
  public activeTab = 'inlab';
  public links = [
    { title: 'Inlab', fragment: 'inlab' },
    { title: 'Onsite', fragment: 'onsite' }
  ];
}
