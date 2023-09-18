import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {
    path: 'customer',
    component: HomeComponent,
  },
  {
    path: 'vendor',
    component: VendorComponent,
  },
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: '**', redirectTo: 'customer' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
