import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { ValidatorFn, AbstractControl } from '@angular/forms';


@Injectable()
export class UserService {

  public userSes: User;
  constructor(private webApiService: ClientService) { }

  get(successCallback: any, errorCallback: any) {
    this.webApiService.get(`User`, successCallback, errorCallback);
  }

  login(user: User[], successCallback: any, errorCallback: any) {
    this.webApiService.post(`User/Login`, user, successCallback, errorCallback);
  }

  register(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.get(`User/register`, user, successCallback, errorCallback);
  }

  update(user: User[], successCallback: any, errorCallback: any) {
    this.webApiService.put(`User`, user,  successCallback, errorCallback);
  }

  delete(id: number, successCallback: any, errorCallback: any) {
    this.webApiService.delete(`User/delete` + id, successCallback, errorCallback);
  }

  changePassword(user: User, successCallback: any, errorCallback: any) {
    this.webApiService.put(`User/changePass`, user, successCallback, errorCallback);
  }

  equalsValidator(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value: any = control.value;
      const otherValue: any = otherControl.value;
      return otherValue === value ? null : { 'notEquals': { value, otherValue } };
    };
  }
}
