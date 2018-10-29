import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Phoneowner } from './phoneowner';

@Injectable()

export class PhoneownerService {

  private phoneownersUrl = 'api/phoneowner';

  constructor(private http: HttpClient) { }

  getPhoneOwners(): Observable<Phoneowner[]> {
    return this.http.get<Phoneowner[]>(this.phoneownersUrl);
  }
}
