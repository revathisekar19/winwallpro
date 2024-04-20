import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fire-project',
  templateUrl: './fire-project.component.html',
  styleUrl: './fire-project.component.scss'
})
export class FireProjectComponent {
  public breadCrumbItems = [
    { label: 'Fire' },
    { label: 'Projects', active: true }
  ];
  public activeTab = 'inlab';
  public links = [
    { title: 'Inlab', fragment: 'inlab' },
    { title: 'Onsite', fragment: 'onsite' }
  ];
}
