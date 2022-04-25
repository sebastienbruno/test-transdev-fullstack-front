import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { TravelComponent } from './travel';

const routes: Routes = [
  { path: '', redirectTo: '/travel', pathMatch: 'full' },
  { path: 'home', redirectTo: '/travel', pathMatch: 'full' },
  { path: 'travel', component: TravelComponent },
  { path: 'bookings', component: BookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
