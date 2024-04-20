import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import {FireProjectComponent} from "./fire-project/fire-project.component";
import {FrInlabProjectComponent} from "./fire-project/fr-inlab-project/fr-inlab-project.component";
import {FrOnsiteProjectComponent} from "./fire-project/fr-onsite-project/fr-onsite-project.component";
import {FireDetailsComponent} from "./fire-details/fire-details.component";
import {FrInlabDetailsComponent} from "./fire-details/fr-inlab-details/fr-inlab-details.component";
import {FrOnsiteDetailsComponent} from "./fire-details/fr-onsite-details/fr-onsite-details.component";
import {FireSummaryComponent} from "./fire-summary/fire-summary.component";
import {FrInlabSummaryComponent} from "./fire-summary/fr-inlab-summary/fr-inlab-summary.component";
import {FrOnsiteSummaryComponent} from "./fire-summary/fr-onsite-summary/fr-onsite-summary.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FireRoutingModule} from "./fire-routing.module";
@NgModule({
    declarations: [
        FireDetailsComponent,FireProjectComponent,FireSummaryComponent,
        FrInlabSummaryComponent,FrInlabDetailsComponent,FrInlabProjectComponent,
        FrOnsiteSummaryComponent,FrOnsiteProjectComponent,FrOnsiteDetailsComponent
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
        RouterOutlet,RouterLink,
FireRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FireModule { }
