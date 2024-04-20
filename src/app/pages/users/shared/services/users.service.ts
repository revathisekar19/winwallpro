import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { environment } from 'src/environments/environment';
import { IAddUser, ILockUser, IProfiles, IUserReq } from '../modals/users.interface';
import { ICommon, IPageKey } from 'src/app/core/modals/core.modal';

const BASE_URL = environment.nodeconfig.authDomain;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersList(req: IPageKey): Observable<IResponse<IProfiles>> {
    return this.http.post<IResponse<IProfiles>>(BASE_URL + GlobalComponent.users.getUsers, req, {
      params: new HttpParams().append('limit', 10).append('sorting', true)
    });
  }

  //put
  updatePassword(data: { password: string }): Observable<IResponse<ICommon>> {
    return this.http.post<IResponse<ICommon>>(BASE_URL + GlobalComponent.users.resetPassword, data);
  }

  //Post
  addUsers(data: IUserReq<IAddUser, 'adminCreateProfileInfo'>): Observable<IResponse<ICommon>> {
    return this.http.post<IResponse<ICommon>>(BASE_URL + GlobalComponent.users.addUsers, data);
  }

  //Put
  updateUsers(data: any): Observable<any> {
    return this.http.put(GlobalComponent.API_URL + 'users', data);
  }

  //Delete
  deleteUsers(data: IUserReq<ILockUser, 'lockUserInfo'>): Observable<IResponse<ICommon>> {
    return this.http.post<IResponse<ICommon>>(BASE_URL + GlobalComponent.users.delusers, data);
  }
}
