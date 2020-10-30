import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ClientService } from '../client/client.service';
import { pipe, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/User';

@Injectable()
export class AuthenticationService {

  private Token: string = null;

  private authenticatedUser = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient, private webApiService: ClientService) { }

  login(data: User[], successCallback: any, errorCallback: any) {

    this.webApiService.post(`Auth`, data, successCallback, errorCallback);
  }
  authorize(data: any) {
    sessionStorage.setItem('currentUser', JSON.stringify(data));;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }
}
