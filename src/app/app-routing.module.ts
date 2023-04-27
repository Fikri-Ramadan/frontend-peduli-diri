import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatatanPerjalananComponent } from './catatan-perjalanan/catatan-perjalanan.component';
import { TambahCatatanComponent } from './tambah-catatan/tambah-catatan.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'catatan-perjalanan',
    component: CatatanPerjalananComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tambah-catatan',
    component: TambahCatatanComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
