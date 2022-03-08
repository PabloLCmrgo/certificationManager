import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CertificationComponent } from './certification.component';



@NgModule({
  declarations: [
    CertificationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CertificationModule { }
