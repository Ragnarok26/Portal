import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {
  constructor(private webApiService: ClientService) { }

  get( successCallback: any, errorCallback: any) {
    this.webApiService.get(`User`, successCallback, errorCallback);
  }

  login(user: User[], successCallback: any, errorCallback: any) {
    this.webApiService.post(`User/Login`, user, successCallback, errorCallback);
  }

  register(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.get(`User/register`, user, successCallback, errorCallback);
  }

  update(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.put(`User/` + user.IdUser, user, successCallback, errorCallback);
  }

  delete(id: number, successCallback: any, errorCallback: any) {
    this.webApiService.delete(`User/delete` + id, successCallback, errorCallback);
  }

  changePassword(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.put(`User/changePass`, user, successCallback, errorCallback);
  }

}
