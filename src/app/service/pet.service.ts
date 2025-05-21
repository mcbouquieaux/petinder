import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {backendUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url: String;
  constructor(private http: HttpClient) {
    this.url= backendUrl
  }

  getPets(): Observable<any>{
    return this.http.get(this.url)
  }
}
