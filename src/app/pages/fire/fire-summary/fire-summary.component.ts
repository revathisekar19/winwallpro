import { Component } from '@angular/core';

@Component({
  selector: 'app-fire-summary',
  templateUrl: './fire-summary.component.html',
  styleUrl: './fire-summary.component.scss'
})
export class FireSummaryComponent {
  public breadCrumbItems = [
    { label: 'Fire' },
    { label: 'Summary', active: true }
  ];
  public activeTab = 'inlab';
  public links = [
    { title: 'Inlab', fragment: 'inlab' },
    { title: 'Onsite', fragment: 'onsite' }
  ];
}
