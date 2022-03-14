import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { CertificationState, CertificationStore } from '../../../../core/akita/session.store';

import { CertificationQuery } from '../../../../core/akita/query';
import { DataService } from '../../../../core/services/select2Data.service';
import { CertificationService } from '../../../../core/services/certification.service';
import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../../../shared/models/certification';
import '../../../../core/web-components/select2-view/select2View';
import { DialogCertification } from '../dialog-certification/dialog-certification';

@Component({
  selector: 'app-select2-view',
  templateUrl: './select2-view.component.html',
  styleUrls: ['./select2-view.component.scss']
})
export class Select2ViewComponent implements OnInit {

  public isLoading: boolean = false;
  public certificationsData: UspWebCertificacionesVolumenesPagoDetallesObtener[] = [];
  public periodo: string[];
  public contrato_marco: string[];
  public imputacion: string[];
  checkedCategoryList: UspWebCertificacionesVolumenesPagoDetallesObtener[];
  uncheckedCategoryList: UspWebCertificacionesVolumenesPagoDetallesObtener[];

  public exampleData: Array<Select2OptionData>;
  public periodoForm = new FormControl();
  public contrato_marcoForm = new FormControl();
  public imputacioneForm = new FormControl();

  constructor(private service: DataService,
    private certificationQuery: CertificationQuery,
    private certificationStore: CertificationStore,
    private certificationService: CertificationService,
    public dialog: MatDialog
  ) {
    this.periodo = [];
    this.contrato_marco = [];
    this.imputacion = [];
  }

  ngOnInit(): void {
    this.exampleData = this.service.getChangeList();
    this.certificationQuery.getLoading().subscribe((res) => (this.isLoading = res));
    this.certificationQuery.getCertificationsData().subscribe((res) => (this.certificationsData = res));
    this.certificationQuery
      .getLoaded()
      .pipe(
        take(1),
        /*filter((res) => !res),*/
        switchMap(() => {
          this.certificationStore.setLoading(true);
          return this.certificationService.getDataSource();
        })
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.certificationsData = res.result
          this.getCheckedItemList();
          for (var i = 0; res.result.length > i; i++) {
            this.contrato_marco = [...this.contrato_marco, ...[res.result[i].contrato_marco]];
            this.periodo = [...this.periodo, ...[res.result[i].periodo]];
            this.imputacion = [...this.imputacion, ...[res.result[i].imputacion]];
          }
          this.certificationStore.update((state): any => {
            return {
              certifications: res,
            };
          });
          this.certificationStore.setLoading(false);
        },
        (err) => {
          console.log(err);
          this.certificationStore.setLoading(false);
        }
      );

    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
  }

  getCheckedItemList() {
    this.checkedCategoryList = [];
    this.uncheckedCategoryList = [];
    for (var i = 0; i < this.certificationsData.length; i++) {
      !!this.certificationsData[i].isCheck ? this.checkedCategoryList.push(this.certificationsData[i]) : this.uncheckedCategoryList.push(this.certificationsData[i]);
    }
    this.certificationStore.update((state): any => {
      return {
        checkedCategoryList: this.checkedCategoryList,
      };
    });
    this.certificationStore.update((state): any => {
      return {
        uncheckCategoryList: this.uncheckedCategoryList,
      };
    });
  }

  openDialog() {
    this.dialog.open(DialogCertification, {
      height: '400px',
      width: '900px',
      panelClass: 'dialogStyle'
    });
  }
}
