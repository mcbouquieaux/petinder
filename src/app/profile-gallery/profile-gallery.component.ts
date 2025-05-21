import {Component, OnInit} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../../../model/Pet';
import {AsyncPipe} from '@angular/common';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
   pets$!: Observable<Pet[]>;
   selectedPet: Pet;

  constructor(private service: PetService) {

  }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void{
     this.pets$ = this.service.getPets().pipe(
       map((pets: Pet[]) => pets.sort((a: Pet, b: Pet) => a.name.localeCompare(b.name)))
     );
  }

  selectPet(pet: Pet): Pet{
    return this.selectedPet= pet
}
}
