import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalariesComponent } from './salaries/salaries.component';
import { LoansComponent } from './loans/loans.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'employees', component: EmployeesComponent
  },
  {
    path: 'salaries', component: SalariesComponent
  },
  {
    path: 'loans', component: LoansComponent
  },
  {
    path: 'deductions', component: DeductionsComponent
  },
  {
    path: 'expenses', component: ExpensesComponent
  },
  {
    path: '', redirectTo: '/homepage', pathMatch: 'full'
  }, // Redirect to homepage
  {
    path: '**', component: PageNotFoundComponent
  } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
