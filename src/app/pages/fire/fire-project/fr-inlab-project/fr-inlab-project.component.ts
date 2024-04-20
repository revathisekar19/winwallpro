import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IChamber, IChambers, IProject, IProjects} from "../../../facade/shared/modals/facade.interface";
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {projectForm} from "../../../facade/shared/constants/facade.const";
import {PaginationService} from "../../../../core/services/pagination.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FacadeService} from "../../../facade/shared/services/facade.service";
import {TokenStorageService} from "../../../../core/services/token-storage.service";
import {IResponse} from "../../../../shared/modal/response.modal";
import {ICommon} from "../../../../core/modals/core.modal";
import {isFieldVisible} from "../../shared/constants/facade.visible";

@Component({
  selector: 'app-fr-inlab-project',
  templateUrl: './fr-inlab-project.component.html',
  styleUrl: './fr-inlab-project.component.scss'
})
export class FrInlabProjectComponent {
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

  // Assuming Projects Details
  upcomingProjected: any[] = [
    { id: 1, projectName: 'Project A', companyName: 'Company A', typeOfSpecimen: 'Type 1', ETA: '2024-04-25' },
    { id: 2, projectName: 'Project B', companyName: 'Company B', typeOfSpecimen: 'Type 2', ETA: '2024-03-28' },
    { id: 3, projectName: 'Project C', companyName: 'Company C', typeOfSpecimen: 'Type 3', ETA: '2024-03-23' },
    { id: 4, projectName: 'Project D', companyName: 'Company D', typeOfSpecimen: 'Type 4', ETA: '2024-02-28' },
    { id: 5, projectName: 'Project E', companyName: 'Company E', typeOfSpecimen: 'Type 5', ETA: '2024-01-28' },
  ];
  ongoingProjected: any[] = [
    { id: 1, projectName: 'Project A', companyName: 'Company A', typeOfSpecimen: 'Type 1', ETD: '2024-04-25' },
    { id: 2, projectName: 'Project B', companyName: 'Company B', typeOfSpecimen: 'Type 2', ETD: '2024-03-28' },
    { id: 3, projectName: 'Project C', companyName: 'Company C', typeOfSpecimen: 'Type 3', ETD: '2024-03-23' },
    { id: 4, projectName: 'Project D', companyName: 'Company D', typeOfSpecimen: 'Type 4', ETD: '2024-02-28' },
    { id: 5, projectName: 'Project E', companyName: 'Company E', typeOfSpecimen: 'Type 5', ETD: '2024-01-28' },
  ];
  completedProjected: any[] = [
    { id: 1, projectName: 'Project A', companyName: 'Company A', typeOfSpecimen: 'Type 1', ETA: '2024-04-25' ,status:'✅' },
    { id: 2, projectName: 'Project B', companyName: 'Company B', typeOfSpecimen: 'Type 2', ETA: '2024-03-28' ,status:'❌'},
    { id: 3, projectName: 'Project C', companyName: 'Company C', typeOfSpecimen: 'Type 3', ETA: '2024-03-23' ,status:'✅'},
    { id: 4, projectName: 'Project D', companyName: 'Company D', typeOfSpecimen: 'Type 4', ETA: '2024-02-28',status:'❌' },
    { id: 5, projectName: 'Project E', companyName: 'Company E', typeOfSpecimen: 'Type 5', ETA: '2024-01-28' ,status:'✅'},
  ];
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
