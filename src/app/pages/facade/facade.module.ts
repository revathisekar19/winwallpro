import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SummaryComponent } from './summary/summary.component';
import { FacadeRoutingModule } from './facade-routing.module';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { InlabComponent } from './projects/inlab/inlab.component';
import { OnsiteComponent } from './projects/onsite/onsite.component';
import { FaInlabDetailsComponent } from './project-details/fa-inlab-details/fa-inlab-details.component';
import { FaOnsiteDetailsComponent } from './project-details/fa-onsite-details/fa-onsite-details.component';
import { FaInlabSummaryComponent } from './summary/fa-inlab-summary/fa-inlab-summary.component';
import { FaOnsiteSummaryComponent } from './summary/fa-onsite-summary/fa-onsite-summary.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    InlabComponent,
    OnsiteComponent,
    ProjectDetailsComponent,
    FaInlabDetailsComponent,
    FaOnsiteDetailsComponent,
    SummaryComponent,
    FaInlabSummaryComponent,
    FaOnsiteSummaryComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgSelectModule,
    FlatpickrModule,
    FormsModule,
    ReactiveFormsModule,
    FacadeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FacadeModule { }
