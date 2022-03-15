import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getStates() {
    return this.httpClient.get(
      'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    );
  }

  getDistrict(id: any) {
    return this.httpClient.get(
      'https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + id
    );
  }

  getAppoinmentByDist(dist_id: number, date: string) {
    return this.httpClient.get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dist_id}&date=${date}`
    );
  }


  getVaccinePin(pin:number){
    return this.httpClient.get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=12-02-2022`
    );
  }






}
