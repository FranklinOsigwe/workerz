import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { RolezComponent } from './components/rolez/rolez.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employee-management';
}
