

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';
import { CertificationStore, CertificationState, SelectedIds } from './session.store';
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

  //getCheckedCategoryList(): Observable<UspWebCertificacionesVolumenesPagoDetallesObtener[]> {
  //  return this.select(state => state.certifications.id);
  //}

  getUnCheckCategoryList(): Observable<SelectedIds[]> {
    return this.select(state => state.uncheckedCategoryList);
  }
}
