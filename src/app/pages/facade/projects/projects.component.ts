import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public breadCrumbItems = [
    { label: 'Facade' },
    { label: 'Projects', active: true }
  ];
  public activeTab = 'inlab';
  public links = [
    { title: 'Inlab', fragment: 'inlab' },
    { title: 'Onsite', fragment: 'onsite' }
  ];

  constructor() { }

}
