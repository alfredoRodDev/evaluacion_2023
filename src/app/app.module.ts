import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvaluacionComponent } from './pages/evaluacion/evaluacion.component';
import { HeaderEvaluacionComponent } from './pages/evaluacion/header-evaluacion/header-evaluacion.component';
import { ListEvaluacionComponent } from './pages/evaluacion/list-evaluacion/list-evaluacion.component';
import { AddContactComponent } from './pages/evaluacion/add-contact/add-contact.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EvaluacionComponent,
    HeaderEvaluacionComponent,
    ListEvaluacionComponent,
    AddContactComponent,
    ModalDeleteComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
