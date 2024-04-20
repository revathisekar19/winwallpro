import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IChamber, IChambers, IProject, IProjects} from "../../../facade/shared/modals/facade.interface";
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {projectForm} from "../../../facade/shared/constants/facade.const";
import {PaginationService} from "../../../../core/services/pagination.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FacadeService} from "../../../facade/shared/services/facade.service";
import {IResponse} from "../../../../shared/modal/response.modal";
import {ICommon} from "../../../../core/modals/core.modal";
import {isFieldVisible} from "../../shared/constants/facade.visible";

@Component({
  selector: 'app-fr-onsite-project',
  templateUrl: './fr-onsite-project.component.html',
  styleUrl: './fr-onsite-project.component.scss'
})
export class FrOnsiteProjectComponent {
  public upcomingProjects: IProject[] = [];
  public allUpcomingProjects: IProject[] = [];
  public ongoingProjects: IProject[] = [];
  public completedProjects: IProject[] = [];
  public availableChambers: IChamber[] = [];
  public searchTerm: any;
  public upComingPage = 0;
  public inlabForm: FormGroup = this.getInLabFormGroup();
  public inLabEditForm: FormGroup = projectForm();


  public isFieldVisible = (fieldName: string) => isFieldVisible(fieldName);
  public specimanType = ['Type A', 'Type B', 'Type C'];

  constructor(public service: PaginationService, public fb: UntypedFormBuilder, private modalService: NgbModal,
              private facadeService: FacadeService) {
    this.getProjects();
    this.getAvailableChambers();
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
    this.facadeService.getInlabProjects('onsite').subscribe({
      next: (res: IResponse<IProjects>[]) => {
        this.allUpcomingProjects = res[0].result.projects;
        this.changeUpcomingPage();
        this.ongoingProjects = res[1].result.projects;
        this.completedProjects = res[2].result.projects;
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
    const proj = this.inLabEditForm.value;
    this.facadeService.updateProject(proj).subscribe({
      next: (res: IResponse<ICommon>) => {
        if (res.responseCode === 9001) {
          this.getProjects();
        }
      }
    });
  }

  performSearch() {

  }

  changePage() {

  }
}
