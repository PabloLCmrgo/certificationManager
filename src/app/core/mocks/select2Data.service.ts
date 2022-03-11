import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { UspWebCertificacionesVolumenesPagoDetallesObtener } from '../../shared/models/certification';



export interface ApiResponse<T = void, U = void> {
  status: ResponseStatus;
  message: string;
  result?: T;
  meta?: U;
}

export interface ResponseStatus {
  Success: 'Success',
  Unauthorized: 'Unauthorized',
  ValidationError: 'ValidationError',
  BizFailure: 'BizFailure',
  Failure: 'Failure'
}
@Injectable()
export class DataService {
  options: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  }
  constructor(private http: HttpClient) { }
  getDynamicList(): Observable<Array<Select2OptionData>> {
    return Observable.create((obs) => {
      obs.next([
        {
          id: 'dyn1',
          text: 'Dynamic 1'
        },
        {
          id: 'dyn2',
          text: 'Dynamic 2'
        },
        {
          id: 'dyn3',
          text: 'Dynamic 3'
        },
        {
          id: 'dyn4',
          text: 'Dynamic 4'
        }
      ]);
      obs.complete();
    });
  }

  getTemplateList(): Select2OptionData[] {
    return [
      {
        id: 'temp1',
        text: 'Template 1',
        additional: {
          image: 'assets/image0.jpg',
          winner: '4'
        }
      },
      {
        id: 'temp2',
        text: 'Template 2',
        additional: {
          winner: '3'
        }
      },
      {
        id: 'temp3',
        text: 'Template 3',
        additional: {
          image: 'assets/image1.jpg',
          winner: '1'
        }
      },
      {
        id: 'temp4',
        text: 'Template 4',
        additional: {
          image: 'assets/image2.jpg',
          winner: '5'
        }
      },
      {
        id: 'temp5',
        text: 'Template 5',
        additional: {
          image: 'assets/image3.jpg',
          winner: '2'
        }
      }
    ];
  }

  getChangeList(): Select2OptionData[] {
    return [
      {
        id: '0',
        text: 'Cars',
        children: [
          {
            id: 'car1',
            text: 'Car 1'
          },
          {
            id: 'car2',
            text: 'Car 2'
          },
          {
            id: 'car3',
            text: 'Car 3'
          }
        ]
      },
      {
        id: '0',
        text: 'Planes',
        children: [
          {
            id: 'plane1',
            text: 'Plane 1'
          },
          {
            id: 'plane2',
            text: 'Plane 2'
          },
          {
            id: 'plane3',
            text: 'Plane 3'
          }
        ]
      }
    ];
  }

  getChangeListAlternative(): Select2OptionData[] {
    return [
      {
        id: '0',
        text: 'Cars',
        children: [
          {
            id: 'car1',
            text: 'Car 1 - New'
          },
          {
            id: 'car2',
            text: 'Car 2 - New'
          },
          {
            id: 'car3',
            text: 'Car 3 - New'
          }
        ]
      },
      {
        id: '0',
        text: 'Planes',
        children: [
          {
            id: 'plane1',
            text: 'Plane 1 - New'
          },
          {
            id: 'plane2',
            text: 'Plane 2 - New'
          },
          {
            id: 'plane3',
            text: 'Plane 3 - New'
          }
        ]
      }
    ];
  }


  getDataSource(id_certificacion_volumen: number): Observable<UspWebCertificacionesVolumenesPagoDetallesObtener[]> {
    return this.http
      .get<ApiResponse<UspWebCertificacionesVolumenesPagoDetallesObtener[]>>
      (`https://localhost:44324/api/v1/Certificaciones?id_certificacion_volumen=${id_certificacion_volumen}`)
      .pipe(
        map((response: ApiResponse<UspWebCertificacionesVolumenesPagoDetallesObtener[]>) => {
          return response.result;
        })
      );
  }
}
