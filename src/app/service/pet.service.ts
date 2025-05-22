import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {backendUrl} from '../../environments/environment';
import {Pet} from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url: string;
  //readonly #httpClient = inject(HttpClient)

  constructor(private httpClient: HttpClient) {
    this.url= backendUrl
  }

  getPets(): Observable<any>{
    return this.httpClient.get(this.url)
  }

  addPet(pet: Pet): Observable<any> {
    return this.httpClient.post(this.url, pet);
  }


}
