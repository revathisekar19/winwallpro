import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IProject, IProjects} from "../../../facade/shared/modals/facade.interface";
import {PaginationService} from "../../../../core/services/pagination.service";
import {UntypedFormBuilder} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FacadeService} from "../../../facade/shared/services/facade.service";
import {IResponse} from "../../../../shared/modal/response.modal";

@Component({
  selector: 'app-fr-inlab-details',
  templateUrl: './fr-inlab-details.component.html',
  styleUrl: './fr-inlab-details.component.scss'
})
export class FrInlabDetailsComponent {
  public completedProjects: IProject[] = [];
  public allCompletedProjects: IProject[] = [];
  public searchTerm: any;
  public upComingPage = 0;

  constructor(public service: PaginationService, public fb: UntypedFormBuilder, private modalService: NgbModal,
              private facadeService: FacadeService) {
    this.getProjects();
  }

  get collectionSize() {
    return this.allCompletedProjects.length ?? 0;
  }

  changeUpcomingPage() {
    const startItem = (this.upComingPage - 1) * 5 + 1;
    const endItem = (this.upComingPage - 1) * 5 + 5;
    this.allCompletedProjects = this.allCompletedProjects.slice(startItem - 1, endItem);
  }

  onSort(column: any) {
    this.completedProjects = this.service.onSort(column, this.completedProjects);
  }

  getProjects() {
    this.facadeService.getCompletedProjects('inlab').subscribe({
      next: (res: IResponse<IProjects>) => {
        this.completedProjects = res.result.projects ?? [];
        this.allCompletedProjects = res.result.projects ?? [];
      }
    });
  }
}
