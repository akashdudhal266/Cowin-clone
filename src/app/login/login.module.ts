import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardModule } from 'primeng/card';
import { OtpComponent } from "./components/otp/otp.component";
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ConfirmOtpComponent } from "./components/confirm-otp/confirm.component";

const otpRoutes : Routes = [
    {path:"login", component:OtpComponent},
    {path:'confirmOtp/:txnId' , component:ConfirmOtpComponent},
]
@NgModule({
  declarations: [OtpComponent, ConfirmOtpComponent],
  imports: [
    CardModule,
    CommonModule,
    RouterModule.forChild(otpRoutes),
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}