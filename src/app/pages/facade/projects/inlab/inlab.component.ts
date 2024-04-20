import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { isFieldVisible } from '../../shared/constants/facade.visible';
import { IChamber, IChambers, IProject, IProjects } from '../../shared/modals/facade.interface';
import { FacadeService } from '../../shared/services/facade.service';
import { ICommon } from 'src/app/core/modals/core.modal';
import { projectForm } from '../../shared/constants/facade.const';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-inlab',
  templateUrl: './inlab.component.html',
  styleUrl: './inlab.component.scss'
})
export class InlabComponent {
  public upcomingProjects: IProject[] = [];
  public allUpcomingProjects: IProject[] = [];
  public ongoingProjects: IProject[] = [];
  public completedProjects: IProject[] = [];
  public availableChambers: IChamber[] = [];
  public searchTerm: any;
  public upComingPage = 0;
  public inlabForm: FormGroup = this.getInLabFormGroup();
  public inLabEditForm: FormGroup = projectForm();

  private user = this.tokenService.getUser();
  public chamberListData: IChamber[] = [];


  public isFieldVisible = (fieldName: string) => isFieldVisible(fieldName);
  public specimanType = ['CW', 'WW', 'HR', 'DR'];

  constructor(public service: PaginationService, public fb: UntypedFormBuilder, private modalService: NgbModal,
    private facadeService: FacadeService, private tokenService: TokenStorageService) {
    this.getProjects();
    this.getAvailableChambers();
    this.getChambers();
  }

  getInLabFormGroup(): FormGroup {
    return this.fb.group({
      projectId: ['', Validators.required],
      projectName: ['', Validators.required],
      companyName: ['', Validators.required],
      typeOfSpecimen: ['', Validators.required],
      ETA: ['', Validators.required],
      chamberAllocation: ['', Validators.required]
    });
  }

  get collectionSize() {
    return this.allUpcomingProjects.length;
  }

  public editAccess(stage: string): boolean {
    if (stage === 'upcoming') {
      return ['admin', 'sadmin'].includes(this.user['custom:userRole']);
    } else if (stage === 'ongoing') {
      return ['production', 'sadmin'].includes(this.user['custom:userRole']);
    } else {
      return ['quality', 'sadmin'].includes(this.user['custom:userRole']);
    }
  }

  getChambers() {
    this.facadeService.getAllChambers().subscribe({
      next: (res: IResponse<IChambers>) => {
        this.chamberListData = res.result.chambers;
      }
    });
  }

  getChamberColor(chamber: IChamber) {
    if (chamber.chamberStatus === 'Available') {
      return { 'available-color': true };
    } else if (chamber.chamberStatus === 'Ongoing') {
      return { 'occupied-color': true };
    } else {
      return { 'upcoming-color': true };
    }
  }

  changeUpcomingPage() {
    const startItem = (this.upComingPage - 1) * 5 + 1;
    const endItem = (this.upComingPage - 1) * 5 + 5;
    this.upcomingProjects = this.allUpcomingProjects.slice(startItem - 1, endItem);
  }

  onSort(column: any) {
    this.upcomingProjects = this.service.onSort(column, this.upcomingProjects)
  }

  openPopupForm(content: any): void {
    this.modalService.open(content, { size: 'md', centered: true });
  }

  editProjectModal(content: any, project: IProject) {
    this.inLabEditForm.patchValue(project);
    this.modalService.open(content, { size: 'lg', centered: true, scrollable: true });
  }

  getProjects() {
    this.facadeService.getInlabProjects('inlab').subscribe({
      next: (res: IResponse<IProjects>[]) => {
        this.allUpcomingProjects = res[0].result.projects ?? [];
        this.changeUpcomingPage();
        this.ongoingProjects = res[1].result.projects ?? [];
        this.completedProjects = res[2].result.projects ?? [];
      }
    });
  }

  getAvailableChambers() {
    this.facadeService.getAvailableChambers().subscribe({
      next: (res: IResponse<IChambers>) => {
        this.availableChambers = res.result.chambers;
      }
    });
  }

  createProj() {
    const proj = this.inlabForm.value;
    proj['chamberAllocation'] = {
      "unitNumber": proj['chamberAllocation'],
      "allocated": proj['chamberAllocation'] ? true : false
    };
    if (this.inlabForm.valid) {
      this.modalService.dismissAll();

      this.facadeService.saveProject(proj).subscribe({
        next: (res: IResponse<ICommon>) => {
          if (res.responseCode === 9001) {
            this.getProjects();
          }
        }
      });
    }
  }

  projectEditSubmit() {
    const proj: IProject = this.inLabEditForm.value;
    if (proj.serviceRequestForm.sent || proj.serviceRequestForm.received) {
      proj.projectStage = 'Ongoing';
    }

    if (proj.finalReport.sent) {
      proj.projectStage = 'Completed';
    }

    this.modalService.dismissAll();
    this.facadeService.updateProject(proj).subscribe({
      next: (res: IResponse<ICommon>) => {
        if (res.responseCode === 9001) {
          this.getProjects();
        }
      }
    });
  }

}
