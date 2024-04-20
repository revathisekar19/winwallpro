import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-project',
  templateUrl: './glass-project.component.html',
  styleUrl: './glass-project.component.scss'
})
export class GlassProjectComponent {
  public breadCrumbItems = [
    { label: 'Glass' },
    { label: 'Projects', active: true }
  ];
  public activeTab = 'bis';
  public links = [
    { title: 'BIS', fragment: 'bis' },
    { title: 'NABL', fragment: 'nabl' }
  ];
}
