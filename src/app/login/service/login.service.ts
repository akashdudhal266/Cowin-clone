import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  dataOfTxnId: any;
  constructor(private httpClient: HttpClient, private router: Router) {}

  getOtp(data: any) {
    return this.httpClient.post(
      'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
      data
    );
  }

  confirmOtp(data: any) {
    let details = {
      txnId: this.dataOfTxnId,
      otp: data.otp,
    };

    this.httpClient
      .post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', details)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
