import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { SearchService } from "../../service/search.service";

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent {
  form: FormGroup;
  vaccineDeatilsByPin : any;

  constructor(private searchService: SearchService) {
    this.form = new FormGroup({
      pin : new FormControl()
    })
  }

  searchVaccination(){
    this.searchService.getVaccinePin(this.form.get('pin')?.value).subscribe((res:any)=>{
        this.vaccineDeatilsByPin = res.sessions
        console.log(this.vaccineDeatilsByPin)
    })
  }

}