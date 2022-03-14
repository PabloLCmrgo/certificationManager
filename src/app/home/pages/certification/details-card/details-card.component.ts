import { Component, OnInit } from '@angular/core';
import { CertificationQuery } from '../../../../core/akita/query';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  public certificationsData: [] = [];

  constructor(private certificationQuery: CertificationQuery) { }

  ngOnInit(): void {
    this.certificationQuery.getCertificationsData().subscribe((res) => {
      res && res['result'] ? this.certificationsData = res['result'] : [];
    });
  }

}
