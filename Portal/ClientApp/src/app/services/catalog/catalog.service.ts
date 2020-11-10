import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ClientService } from '../client/client.service';

@Injectable()
export class CatalogService {

  constructor(private webApiService: ClientService) { }
	
	public get(data: any, successCallback: any, errorCallback: any) {
		this.webApiService.get('Catalogs', successCallback, errorCallback, data);
	}

}
