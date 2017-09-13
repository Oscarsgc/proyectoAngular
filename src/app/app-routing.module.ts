import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { ProfileComponent } from 'app/components/profile/profile.component';
import { ExperienceComponent } from 'app/components/experience/experience.component';
import { AbilitiesComponent } from 'app/components/abilities/abilities.component';
import { ProjectsComponent } from 'app/components/projects/projects.component';
import { ContactComponent } from 'app/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'abilities', component: AbilitiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
