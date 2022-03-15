import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
})
export class DistrictComponent {
  states: any;
  districts: any;
  selectedState: any;
  vaccineData: any;
  
  date = new Date();
  todayDate = `${this.date.getDate()}/${this.date.getMonth}/${
    this.date.getFullYear
  }`;
  form: FormGroup;

  constructor(private searchService: SearchService) {
    this.getSates();
    this.form = new FormGroup({
      selectedState: new FormControl(),
      selectedDistrict: new FormControl(),
    });

    this.form.get('selectedState')?.valueChanges.subscribe((stateID) => {
      console.log(stateID);
      this.getStateDistrict(stateID);
    });

    this.form.get('selectedDistrict')?.valueChanges.subscribe((districtID) => {
      console.log(districtID);
    });
  }

  getSates() {
    this.searchService.getStates().subscribe((res: any) => {
      console.log(res);
      this.states = res.states;
    });
  }

  getStateDistrict(selectedStateId: any) {
    this.searchService.getDistrict(selectedStateId).subscribe((res: any) => {
      console.log(res);
      this.districts = res.districts;
    });
  }

  searchAppoinmentBtDist() {
    this.searchService
      .getAppoinmentByDist(
        this.form.get('selectedDistrict')?.value,
        '12-02-2022'
      )
      .subscribe((res: any) => {
        this.vaccineData = res.sessions;
        console.log(this.vaccineData);
      });
  }
}
