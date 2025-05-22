import {Component, inject, Input, OnInit} from '@angular/core';
import {Pet} from '../../model/Pet';
import {PetService} from '../../service/pet.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-setup-date',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit{
  @Input() name: string | undefined;
  pet: Pet | undefined ;
  sendTextForm: FormGroup;

  private petService = inject(PetService)

  constructor(private fb: FormBuilder) {
    this.sendTextForm = this.fb.group({
      name: ['', Validators.required]
    });
  }


  ngOnInit() {
    if (this.name) {
      this.petService.getPetByName(this.name).subscribe({
        next: (pet) => this.pet = pet,
        error: (err) => console.error('Error fetching pet:', err)
      });
    }
  }

  onSubmit(): void {
    if (this.sendTextForm.valid) {
      console.log(this.sendTextForm.value);
    }
  }

}
