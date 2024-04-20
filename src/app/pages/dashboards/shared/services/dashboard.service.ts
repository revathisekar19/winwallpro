import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { environment } from 'src/environments/environment';
import { INotice } from '../../dashboard/dashboard.model';
import { SharedService } from 'src/app/shared/shared.service';

const BASE_URL = environment.nodeconfig.appDomain;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getAllEvents(req: {
    eventAccess: string;
    LastEvaluatedKey: string
  }): Observable<IResponse<INotice>> {
    return this.http.post<IResponse<INotice>>(BASE_URL + GlobalComponent.dashboard.allEvents, req).pipe(
      /* map((els) => {
        els.result.businessEvents.map(el => ({
          ...el,
          createdAt: this.sharedService.stringToDate(el.createdDate)
        }));
        return els;
      }) */
    );
  }

  getEvent(eventId: string) {
    return this.http.get<IResponse<INotice>>(BASE_URL + GlobalComponent.dashboard.getEvent + eventId).pipe();
  }

  saveEvent(req: {
    eventTitle: string;
    eventContent: string;
    eventAccess: string;
    eventExpiry: string;
  }) {
    return this.http.post<IResponse<INotice>>(BASE_URL + GlobalComponent.dashboard.addEvent, req).pipe();
  }
}
