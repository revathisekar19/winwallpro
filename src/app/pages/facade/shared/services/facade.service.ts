import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { ICommon } from 'src/app/core/modals/core.modal';
import { GlobalComponent } from 'src/app/global-component';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { environment } from 'src/environments/environment';
import { IChambers, IProject, IProjects, ISaveProject } from '../modals/facade.interface';

const BASE_URL = environment.nodeconfig.appDomain;

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private http: HttpClient) { }

  getInlabProjects(category: 'inlab' | 'onsite') {
    return zip(
      this.getUpcomingProjects(category),
      this.getOngoingProjects(category),
      this.getCompletedProjects(category)
    );
  }

  getUpcomingProjects(category: 'inlab' | 'onsite'): Observable<IResponse<IProjects>> {
    return this.http.post<IResponse<IProjects>>(BASE_URL + GlobalComponent.facade.getProjects, { LastEvaluatedKey: '' }, {
      params: new HttpParams().append('page', 'facade').append('category', category).append('stage', 'Upcoming')
        .append('sorting', true)
    });
  }

  getOngoingProjects(category: 'inlab' | 'onsite'): Observable<IResponse<IProjects>> {
    return this.http.post<IResponse<IProjects>>(BASE_URL + GlobalComponent.facade.getProjects, { LastEvaluatedKey: '' }, {
      params: new HttpParams().append('page', 'facade').append('category', category).append('stage', 'Ongoing')
        .append('sorting', true)
    });
  }

  getCompletedProjects(category: 'inlab' | 'onsite'): Observable<IResponse<IProjects>> {
    return this.http.post<IResponse<IProjects>>(BASE_URL + GlobalComponent.facade.getProjects, { LastEvaluatedKey: '' }, {
      params: new HttpParams().append('page', 'facade').append('category', category).append('stage', 'Completed')
        .append('sorting', true)
    });
  }

  saveProject(req: ISaveProject): Observable<IResponse<ICommon>> {
    return this.http.post<IResponse<ICommon>>(BASE_URL + GlobalComponent.facade.addProjects, req);
  }

  updateProject(req: IProject): Observable<IResponse<ICommon>> {
    return this.http.post<IResponse<ICommon>>(BASE_URL + GlobalComponent.facade.updateProjects, req);
  }

  getAllChambers(): Observable<IResponse<IChambers>> {
    return this.http.get<IResponse<IChambers>>(BASE_URL + GlobalComponent.facade.getChambers, {
      params: new HttpParams().append('sorting', false)
    });
  }

  getAvailableChambers(): Observable<IResponse<IChambers>> {
    return this.http.get<IResponse<IChambers>>(BASE_URL + GlobalComponent.facade.getChambers, {
      params: new HttpParams().append('sorting', false).append('available', true)
    });
  }
}
