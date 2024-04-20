import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { DashboardService } from '../shared/services/dashboard.service';
import { IBusinessEvent, INotice, INoticeObj } from './dashboard.model';
import { ToastService } from './toast-service';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { IJwtToken } from 'src/app/account/login/login.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Ecommerce Component
 */
export class DashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  allEvents: INoticeObj = {};
  eventForm!: FormGroup;
  lastEvaluatedKey: any;
  eventAccessList = [
    { name: 'Common' },
    { name: 'QA' },
    { name: 'Admin' },
  ];

  userData!: IJwtToken;

  constructor(public toastService: ToastService, private dashService: DashboardService, private fb: UntypedFormBuilder,
    private tokenService: TokenStorageService) {
    this.eventForm = this.fb.group({
      eventTitle: ['', Validators.required],
      eventContent: ['', Validators.required],
      eventAccess: ['Common', Validators.required],
      eventExpiry: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userData = this.tokenService.getUser();
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Dashboard', active: true }
    ];

    /**
    * Fetches the data
    */
    this.fetchEvents();
  }

  private fetchEvents() {
    this.dashService.getAllEvents({ eventAccess: 'common', LastEvaluatedKey: '' }).subscribe({
      next: (res: IResponse<INotice>) => {
        this.allEvents = res.result?.businessEvents;
      }
    });
  }

  public saveNotice() {
    const eventForm = this.eventForm.value;
    eventForm.eventAccess = eventForm.eventAccess.name;
    this.dashService.saveEvent(eventForm).subscribe({
      next: () => this.fetchEvents()
    });
  }

}
