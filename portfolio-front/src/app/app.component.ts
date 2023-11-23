import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, AboutMeComponent, EducationComponent]
})
export class AppComponent {
  title = 'portfolio-front';
}
