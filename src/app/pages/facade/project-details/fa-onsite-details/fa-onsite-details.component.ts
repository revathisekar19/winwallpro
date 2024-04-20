import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { IProject, IProjects } from '../../shared/modals/facade.interface';
import { FacadeService } from '../../shared/services/facade.service';

@Component({
  selector: 'app-fa-onsite-details',
  templateUrl: './fa-onsite-details.component.html',
  styleUrl: './fa-onsite-details.component.scss'
})
export class FaOnsiteDetailsComponent {
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
    this.facadeService.getCompletedProjects('onsite').subscribe({
      next: (res: IResponse<IProjects>) => {
        this.completedProjects = res.result.projects ?? [];
        this.allCompletedProjects = res.result.projects ?? [];
      }
    });
  }
}
