import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _title: String;

  constructor() {
    this._title = 'Petinder'
  }

  get title(): String {
    return this._title;
  }
}
