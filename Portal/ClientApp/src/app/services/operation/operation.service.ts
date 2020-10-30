import { Injectable } from '@angular/core';
import { Gestion } from 'src/app/models/Gestion';
import { ClientService } from '../client/client.service';
import { User } from '../../models/User';


@Injectable()
export class OperationService {


  constructor(private webApiService: ClientService) { }

  //get(successCallback: any, errorCallback: any) {
  //  this.webApiService.get(`Operation`, successCallback, errorCallback);
  //}

  getGestion(data: User[], successCallback: any, errorCallback: any) {
    this.webApiService.post(`Operation/Gestion`, data, successCallback, errorCallback);
  }

  //register(user: User, successCallback: any, errorCallback: any) {
  //  this.webApiService.get(`User/register`, user, successCallback, errorCallback);
  //}

  //update(user: User[], successCallback: any, errorCallback: any) {
  //  this.webApiService.put(`User`, user, successCallback, errorCallback);
  //}

  //delete(id: number, successCallback: any, errorCallback: any) {
  //  this.webApiService.delete(`User/delete` + id, successCallback, errorCallback);
  //}

  //changePassword(user: User, successCallback: any, errorCallback: any) {
  //  this.webApiService.put(`User/changePass`, user, successCallback, errorCallback);
  //}
}
