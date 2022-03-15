import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss'],
})
export class VaccineComponent {

   @Input() vaccinationDetails :any;

}