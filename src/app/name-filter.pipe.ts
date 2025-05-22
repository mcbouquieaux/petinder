import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from './model/Pet';

@Pipe({
  name: 'nameFilter',
  standalone:true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[] | null | undefined, name: string= ''): Pet[] {
    if (!pets){
      return []
    }
    const lowerName = name.toLocaleLowerCase();
    return pets.filter(pet => {
      return pet.name.toLocaleLowerCase().includes(lowerName);
    });
  }

}
