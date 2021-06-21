import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private http: HttpClient) { }

  singleApiCall(url: string, method: string, params?: any, headers?: any, isPath?: boolean | false, responseType?: string, listenUrl?: string): any {

    let header = null;
    if (headers !== undefined || headers !== null) {
      header = new HttpHeaders(headers);
    }

    switch (method) {

      case 'GET':
        if (isPath) {
          url = url + params;
          const options: any = {
            headers: header
          };
          if (responseType !== undefined) {
            options.responseType = responseType;
          }

          return this.http.get(url, options);
        } else {
          const options: any = {
            headers: header,
            params: params
          };
          if (responseType !== undefined) {
            options.responseType = responseType;
          }
          return this.http.get(url, options);
        }

      case 'POST':
        const options: any = {
          headers: header
        };
        if (responseType !== undefined) {
          options.responseType = responseType;
        }

        return this.http.post(url, params, options);

      case 'PUT':
        const optionss: any = {
          headers: header
        };
        return this.http.put(url, params, optionss);

      case 'DELETE':
        if (isPath) {
          url = url + params;
          const options: any = {
            headers: header
          };
          if (responseType !== undefined) {
            options.responseType = responseType;
          }

          return this.http.delete(url, options);
        } else {
          const options: any = {
            headers: header,
            params: params
          };
          if (responseType !== undefined) {
            options.responseType = responseType;
          }
          return this.http.delete(url, options);
        }
    }
  }
}
