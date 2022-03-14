import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';

export interface CertificationState {
  certifications: UspWebCertificacionesVolumenesPagoDetallesObtener[];
  isLoaded: boolean;
  checkedCategoryList: SelectedIds[];
  uncheckedCategoryList: SelectedIds[];

}

export interface SelectedIds {
  id: number

}

export const getInitialState = () => {
  return {
    certificationData: [],
    isLoaded: false,
    checkedCategoryList: [],
    uncheckCategoryList: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class CertificationStore extends Store<CertificationState> {

  constructor() {
    super(getInitialState());
  }
}
