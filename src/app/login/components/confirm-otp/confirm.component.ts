import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../service/login.service";

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmOtpComponent {
  otpForm: FormGroup;

  constructor(private loginService: LoginService) {
      this.otpForm = new FormGroup({
          otp:new FormControl(null, [Validators.required]) })
      }

      verifyOtp(){
        this.loginService.confirmOtp(this.otpForm.value)
      }
  }
