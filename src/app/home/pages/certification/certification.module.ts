import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgSelect2Module } from 'ng-select2';
import { MatDialogModule } from '@angular/material/dialog';

import { CertificationComponent } from './certification.component';
import { Select2ViewComponent } from './select2-view/select2-view.component';
import { DataService } from '../../../core/services/select2Data.service';
import { CertificationService } from '../../../core/services/certification.service';



@NgModule({
  declarations: [
    CertificationComponent,
    Select2ViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgSelect2Module,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule

  ], exports: [
    Select2ViewComponent
  ], providers: [
    CertificationService,
    DataService
  ]
})
export class CertificationModule { }
