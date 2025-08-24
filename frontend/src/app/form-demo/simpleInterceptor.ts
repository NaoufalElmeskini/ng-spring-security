import {HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export function simpleInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log(req.url);

  const headers = new HttpHeaders({'Authorization': 'Basic YmVhdHJpY2U6cGFzc3dvcmQ='});

  req = req.clone({headers: headers, responseType: 'text'});
  return next(req);
}
