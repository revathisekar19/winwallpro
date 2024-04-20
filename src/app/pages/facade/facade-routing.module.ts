import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { SummaryComponent } from './summary/summary.component';
import { InlabComponent } from './projects/inlab/inlab.component';
import { OnsiteComponent } from './projects/onsite/onsite.component';
import { FaInlabDetailsComponent } from './project-details/fa-inlab-details/fa-inlab-details.component';
import { FaOnsiteDetailsComponent } from './project-details/fa-onsite-details/fa-onsite-details.component';
import { FaInlabSummaryComponent } from './summary/fa-inlab-summary/fa-inlab-summary.component';
import { FaOnsiteSummaryComponent } from './summary/fa-onsite-summary/fa-onsite-summary.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        redirectTo: 'inlab',
        pathMatch: 'full'
      },
      {
        path: 'inlab',
        component: InlabComponent
      },
      {
        path: 'onsite',
        component: OnsiteComponent
      }
    ]
  },
  {
    path: 'details',
    component: ProjectDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'inlab',
        pathMatch: 'full'
      },
      {
        path: 'inlab',
        component: FaInlabDetailsComponent
      },
      {
        path: 'onsite',
        component: FaOnsiteDetailsComponent
      }
    ]
  },
  {
    path: 'summary',
    component: SummaryComponent,
    children: [
      {
        path: '',
        redirectTo: 'inlab',
        pathMatch: 'full'
      },
      {
        path: 'inlab',
        component: FaInlabSummaryComponent
      },
      {
        path: 'onsite',
        component: FaOnsiteSummaryComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacadeRoutingModule { }
