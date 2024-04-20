import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import {RouterLink, RouterOutlet} from "@angular/router";
import {GlassDetailsComponent} from "./glass-details/glass-details.component";
import {GlassProjectComponent} from "./glass-project/glass-project.component";
import {GlassSummaryComponent} from "./glass-summary/glass-summary.component";
import {GlassRoutingModule} from "./glass-routing.module";
import {BisProjectComponent} from "./glass-project/bis-project/bis-project.component";
import {BisSummaryComponent} from "./glass-summary/bis-summary/bis-summary.component";
import {BisDetailsComponent} from "./glass-details/bis-details/bis-details.component";
import {NablSummaryComponent} from "./glass-summary/nabl-summary/nabl-summary.component";
import {NablProjectComponent} from "./glass-project/nabl-project/nabl-project.component";
import {NablDetailsComponent} from "./glass-details/nabl-details/nabl-details.component";
import {CreatebisComponent} from "./glass-project/bis-project/createbis/createbis.component";
import {EditbisComponent} from "./glass-project/bis-project/editbis/editbis.component";
import {CreateproComponent} from "./glass-project/nabl-project/createpro/createpro.component";
import {EditnablComponent} from "./glass-project/nabl-project/editnabl/editnabl.component";

@NgModule({
    declarations: [
GlassDetailsComponent,GlassProjectComponent,GlassSummaryComponent,
        BisProjectComponent,BisSummaryComponent,BisDetailsComponent,
        NablSummaryComponent,NablProjectComponent,NablDetailsComponent,CreatebisComponent,EditbisComponent,
        CreateproComponent,EditnablComponent
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
GlassRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlassModule { }
