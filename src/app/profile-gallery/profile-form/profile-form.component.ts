import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Pet} from '../../model/Pet';
import {PetService} from '../../service/pet.service';


@Component({
  selector: 'app-profile-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {

  private formBuilder= inject(FormBuilder);
  @Output() petSaved = new EventEmitter<Pet>();

  constructor(private service: PetService) {

  }
  profileForm= this.formBuilder.nonNullable.group({
    id: ['',Validators.required],
    name: ['',Validators.required],
    kind: ['',Validators.required],
    image: ['',Validators.required],
    profileText: ['',Validators.required],
    popularity:['',Validators.required]
  })

  savePet() {
    if (this.profileForm.valid){
      const formValue = this.profileForm.value;
      const pet: Pet = {
        id: Number(formValue.id),
        name: formValue.name || '',
        kind: formValue.kind || '',
        image: formValue.image || '',
        profileText: formValue.profileText || '',
        popularity: Number(formValue.popularity)
      };
      this.service.addPet(pet).subscribe({
        next: (response) => {
          console.log('Pet added successfully:', response);
          //this.getPets(); // Refresh the pet list
          this.profileForm.reset(); // Clear the form
        },
        error: (error) => {
          console.error('Error adding pet:', error);
        }
      });
      this.petSaved.emit(pet)
    }
  }

}
