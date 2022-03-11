import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';

import certification from '../../core/mocks/bdd.json'
import { ApiResponse } from '../../shared/models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  /*   headers = new HttpHeaders().set('Content-Type', 'application/json'); */

  constructor(private _http: HttpClient) { }

  //public getCertificationInfo<UspWebCertificacionesVolumenesPagoDetallesObtener>() {
  //let cert: Observable<UspWebCertificacionesVolumenesPagoDetallesObtener[]> = certification;
  //  return cert
  //}

  //getDataSource(id_certificacion_volumen: number): Observable<UspWebCertificacionesVolumenesPagoDetallesObtener[]> {
  //  return this._http
  //    .get<ApiResponse<UspWebCertificacionesVolumenesPagoDetallesObtener[]>>
  //    (`https://localhost:44324/api/v1/Certificaciones?id_certificacion_volumen=${id_certificacion_volumen}`)
  //    .pipe(
  //      map((response: ApiResponse<UspWebCertificacionesVolumenesPagoDetallesObtener[]>) => {
  //        return certification;
  //      })
  //    );
  //}

  getDataSource(): Observable<ApiResponse> {
    return of(certification)
  }
}
