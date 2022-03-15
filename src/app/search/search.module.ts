import { NgModule } from '@angular/core';
import { DistrictComponent } from './components/district/district.component';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { PinComponent } from './components/pin/pin.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

const searchRoutes : Routes = [

  {path:"search", component :SearchHomeComponent , children:[
    {path:'district',component:DistrictComponent},
    {path:'pin',component:PinComponent},
  ]},
  
]

@NgModule({
  declarations: [
    DistrictComponent,
    SearchHomeComponent,
    PinComponent,
    VaccineComponent,
  ],
  imports: [
    DropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(searchRoutes),
    ButtonModule,
    CommonModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
  ],
})
export class SearchModule {}
