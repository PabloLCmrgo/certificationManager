import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../../core/services/certification.service';



@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

constructor(public _certification: CertificationService){

};

  ngOnInit(): void {
     console.log(this._certification.getCertificationInfo());
  }
}
