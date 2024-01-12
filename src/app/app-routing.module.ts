import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EvaluacionComponent } from './pages/evaluacion/evaluacion.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'evaluacion', component: EvaluacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
