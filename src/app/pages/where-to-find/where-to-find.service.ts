import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WhereToFindService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  getAddress(): Observable<any> {
    return this.httpCliente.get<any>('/address.json');
  }
}
