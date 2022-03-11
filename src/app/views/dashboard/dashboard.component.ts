import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../../core/services/certification.service';

import { DataService } from '../../core/mocks/select2Data.service';
import { Select2OptionData } from 'ng-select2';
import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public data: UspWebCertificacionesVolumenesPagoDetallesObtener[];
  private _value: string;
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    console.log('set value with ' + value);
    this._value = value;
  }

  public placeholder = 'placeholder';

  constructor(private service: DataService, public _certification: CertificationService) { }

  ngOnInit() {
    console.log(this._certification.getCertificationInfo());
    this.exampleData = this.service.getChangeList();
    this.service.getDataSource(1).subscribe(x => {
      this.data = x;
      console.log(this.data);

    });
  }

  public changeValue() {
    this.value = 'car2';
  }

  public changeData() {
    this.exampleData = this.service.getChangeListAlternative();
  }

  public changePlaceholder() {
    this.placeholder = 'placeholder2';
  }
}
