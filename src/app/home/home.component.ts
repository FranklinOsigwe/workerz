import { Component } from '@angular/core';
import { DesignationComponent } from '../components/designation/designation.component';
import { RolezComponent } from '../components/rolez/rolez.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [DesignationComponent, RolezComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentComponent: string = 'Roles';

  toggle(tab: string) {
    this.currentComponent = tab
  }
}
