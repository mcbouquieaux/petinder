import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { LayoutComponent} from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Petinder';
}
