import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private httpClient: HttpClient) {
  }

  handleError(error: any): void {
    /*
      Do something with backend e.g. and maybe swallow the error
      this.httpClient.post(...).subscribe();
      Rethrow the error, otherwise it will be swallowed
     */
    throw error;
  }
}
