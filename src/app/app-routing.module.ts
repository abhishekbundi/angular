import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {GalleryComponent} from './components/gallery/gallery.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{ path: 'contact', component: ContactComponent,pathMatch: 'full' },
{ path: 'gallery', component: GalleryComponent,pathMatch: 'full' },
{ path: 'about', component: AboutComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
