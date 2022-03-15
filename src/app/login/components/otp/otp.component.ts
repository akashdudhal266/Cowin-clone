import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private httpClient: HttpClient,
    private router:Router) {
    this.form = new FormGroup({
      mobile: new FormControl(null, [Validators.required]),
    });
  }

  gerateOtp() {
    this.loginService.getOtp(this.form.value)
    .subscribe((res: any) => {
      // this.loginService.dataOfTxnId = res.txnId;
      this.router.navigateByUrl('confirmOtp' + '/' + res.txnId);
    });
  }
}
