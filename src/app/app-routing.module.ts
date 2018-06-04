import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/services/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: 'app', loadChildren: 'app/layout/layout.module#LayoutModule' },
  { path: 'app', component: LayoutComponent, children: [
    ],
    // canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })  // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
