import { Component } from '@angular/core';

@Component({
  selector: 'app-fire-details',
  templateUrl: './fire-details.component.html',
  styleUrl: './fire-details.component.scss'
})
export class FireDetailsComponent {
  public breadCrumbItems = [
    { label: 'Fire' },
    { label: 'Project Details', active: true }
  ];
  public activeTab = 'inlab';
  public links = [
    { title: 'Inlab', fragment: 'inlab' },
    { title: 'Onsite', fragment: 'onsite' }
  ];
}
