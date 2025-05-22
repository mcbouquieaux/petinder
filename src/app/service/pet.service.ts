import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
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

  getPets(): Observable<Pet[]>{
    return this.httpClient.get<Pet []>(this.url)
  }

  getPetByName(petName: string): Observable<Pet>{
    return this.httpClient.get<Pet>(`${this.url}/${petName}`)
  }

  addPet(pet: Pet): Observable<any> {
    return this.httpClient.post(this.url, pet);
  }


}
