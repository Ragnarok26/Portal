import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {
  constructor(private webApiService: ClientService) { }

  get( successCallback: any, errorCallback: any) {
    this.webApiService.get(`/users/`, successCallback, errorCallback);
  }

  getById(id: number, successCallback: any, errorCallback: any) {
    this.webApiService.get(`/users/GetById` + id, successCallback, errorCallback);
  }

  register(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.get(`/users/register`, user, successCallback, errorCallback);
  }

  update(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.put(`/users/` + user.idUser, user, successCallback, errorCallback);
  }

  delete(id: number, successCallback: any, errorCallback: any) {
    this.webApiService.delete(`/users/delete` + id, successCallback, errorCallback);
  }

  changePassword(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.put(`/users/changePass`, user, successCallback, errorCallback);
  }

}
