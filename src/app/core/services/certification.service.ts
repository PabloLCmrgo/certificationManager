import { Icertification } from './../../shared/models/certification';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import certification from '../../core/mocks/bdd.json'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  /*   headers = new HttpHeaders().set('Content-Type', 'application/json'); */

  constructor(public _httpClient: HttpClient) { }

  public getCertificationInfo<Icertification>() {
    let cert:Observable<Icertification> = certification;
    return cert
  }
}
