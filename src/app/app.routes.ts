import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DesignationComponent } from './components/designation/designation.component';
import { RolezComponent } from './components/rolez/rolez.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to 'home' by default
      { path: 'about-us', component: AboutUsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'designation', component: DesignationComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'client', component: ClientComponent },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Wildcard route to handle undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}





























// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeFormComponent } from './employee-form/employee-form.component';
// import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
// import { DesignationComponent } from './components/designation/designation.component';
// import { RolezComponent } from './components/rolez/rolez.component';
// import { EmployeeComponent } from './components/employee/employee.component';
// import { ClientComponent } from './components/client/client.component';
// import { LoginComponent } from './components/login/login.component';
// import { LayoutComponent } from './layout/layout.component';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       { path: 'about-us', component: AboutUsComponent },
//       { path: 'home', component: HomeComponent },
//       { path: 'contact-us', component: ContactUsComponent },
//       { path: 'designation', component: DesignationComponent },
//       { path: 'employee', component: EmployeeComponent },
//       { path: 'client', component: ClientComponent },
//     ],
//   },

 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
