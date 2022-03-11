import { Component, OnInit } from '@angular/core';
import { CertificationQuery } from '../../core/akita/query';

import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public certificationsData: [] = [];



  constructor(private certificationQuery: CertificationQuery) { }

  ngOnInit() {
    this.certificationQuery.getCertificationsData().subscribe((res) =>
    {
      res && res['result'] ? this.certificationsData = res['result'] : [];
    });
  }

}
