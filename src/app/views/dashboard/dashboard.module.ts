import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CertificationService } from '../../core/services/certification.service';
import { NgSelect2Module } from 'ng-select2';
import { DataService } from '../../core/services/select2Data.service';
import { CommonModule } from '@angular/common';

//temp CertificationModule
import { CertificationModule } from '../../home/pages/certification/certification.module';

//nnSelect2

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    NgSelect2Module,
    CertificationModule, //temp
CommonModule
  ],
  declarations: [ DashboardComponent ],
  providers:[CertificationService, DataService]
})
export class DashboardModule { }
