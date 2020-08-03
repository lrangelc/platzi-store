import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export function handleHttpResponseError(
  err: HttpErrorResponse
): Observable<never> {
  return throwError(`Mi mensaje de error - message: ${err.message}`);
}
