import {Component, inject, OnInit} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';
import {AsyncPipe} from '@angular/common';
import {map, Observable, switchMap} from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NameFilterPipe} from '../name-filter.pipe';
import {ProfileFormComponent} from './profile-form/profile-form.component';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe, FormsModule, NameFilterPipe, ReactiveFormsModule, ProfileFormComponent, RouterLink],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
   pets$!: Observable<Pet[]>;
   selectedPet: Pet | undefined;
   selectedName: string | undefined;
   searchText: string | undefined;

   private readonly route = inject(ActivatedRoute)

  constructor(private service: PetService) {

  }

  ngOnInit() {
    //this.getPets();
    this.pets$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedName = String(params.get('name'));
        return this.getPets()
      })
    )
  }

  getPets(): Observable<Pet[]>{
     return this.service.getPets().pipe(
       map((pets: Pet[]) => pets.sort((a: Pet, b: Pet) => a.name.localeCompare(b.name)))
     );
  }


  selectPet(pet: Pet): Pet{
    return this.selectedPet= pet
  }
}
