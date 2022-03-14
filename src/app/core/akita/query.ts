

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { SelectedIds, UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';
import { CertificationStore, CertificationState } from './session.store';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CertificationQuery extends Query<CertificationState> {

  constructor(protected _certificationStore: CertificationStore) {
    super(_certificationStore);
  }

  getCertificationsData(): Observable<UspWebCertificacionesVolumenesPagoDetallesObtener[]> {
    return this.select(state => state.certifications);
  }

  getLoaded(): Observable<boolean> {
    return this.select(state => state.isLoaded);
  }

  getLoading(): Observable<boolean> {
    return this.selectLoading();
  }

  getCheckedCategoryList(): Observable<SelectedIds[]> {
    return this.select(state => state.checkedCategoryList);
  }

  getUnCheckCategoryList(): Observable<SelectedIds[]> {
    return this.select(state => state.uncheckedCategoryList);
  }
}
