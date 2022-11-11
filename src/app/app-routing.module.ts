import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StationComponent } from './station/station.component';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [
  {path:'',redirectTo:'admin' , pathMatch:'full'},
  {path:'admin',component:RegisterComponent},
  {path:'trip',component:TripComponent},
  {path:'station',component:StationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
