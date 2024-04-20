import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbAccordionModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LandingScrollspyDirective } from './landingscrollspy.directive';
import { ScrollspyDirective } from './scrollspy.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ScrollspyDirective,
    LandingScrollspyDirective
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbDropdownModule,
    SlickCarouselModule,
    CountUpModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgSelectModule,
    FlatpickrModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BreadcrumbsComponent, ScrollspyDirective, LandingScrollspyDirective, NgbNavModule, NgbAccordionModule,
    NgbDropdownModule, SlickCarouselModule, CountUpModule, NgbPaginationModule, NgbTypeaheadModule, NgSelectModule,
    FlatpickrModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
