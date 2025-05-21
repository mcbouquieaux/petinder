import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private _year: number;

  constructor() {
    let dateobj = new Date()
    this._year = dateobj.getFullYear();
    //this._year = 2025;
  }

  get year(): number {
    return this._year;
  }
}
