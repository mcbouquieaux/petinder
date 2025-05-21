import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {backendUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url= backendUrl
  }

  getPets(): Observable<any>{
    return this.httpClient.get(this.url)
  }
}
