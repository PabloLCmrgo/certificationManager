

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';
import { CertificationStore, CertificationState } from './session.store';

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
}
