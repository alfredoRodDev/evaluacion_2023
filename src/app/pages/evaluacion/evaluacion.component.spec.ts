import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionComponent } from './evaluacion.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EvaluacionComponent', () => {
  let component: EvaluacionComponent;
  let fixture: ComponentFixture<EvaluacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    });
    fixture = TestBed.createComponent(EvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onOpenModal should set isOpenModal to true', () => {
    component.onOpenModal();
    expect(component.isOpenModal).toBeTruthy();
  });

  it('#onCloseModal should set isOpenModal to false', () => {
    component.onCloseModal();
    expect(component.isOpenModal).toBeFalsy();
  });

  it('#onSubmit should set isOpenModal to false', () => {
    component.onSubmit({} as any);
    expect(component.isOpenModal).toBeFalsy();
  });

  it('#onSubmit should set snackBarObj to add success', () => {
    component.onSubmit({id: ''} as any);
    expect(component.snackBarObj).toEqual({isOpen: true,isSuccess: true,message: 'Contacto agregado correctamente'});
  });

  it('#onSubmit should set snackBarObj to update success', () => {
    component.onSubmit({id: '1234'} as any);
    expect(component.snackBarObj).toEqual({isOpen: true,isSuccess: true,message: 'Contacto editado correctamente'});
  });

  it('#handleOnCloseModalDelete should set isOpenModalDelete to false', () => {
    component.handleOnCloseModalDelete();
    expect(component.isOpenModalDelete).toBeFalsy();
  });

  it('#onReadExcelFile should set excelData', () => {
    component.onReadExcelFile({target: {files: [new Blob()]}} as any);
    expect(component.excelData).toBeTruthy();
  });

  it('#handleOnSubmitDelete should set isOpenModalDelete to false', () => {
    component.handleOnSubmitDelete();
    expect(component.isOpenModalDelete).toBeFalsy();
  });

  it('#handleOnSubmitDelete should set snackBarObj to delete success', () => {
    component.handleOnSubmitDelete();
    expect(component.snackBarObj).toEqual({isOpen: true,isSuccess: true,message: 'Contacto eliminado correctamente'});
  });

  it('#handleOnCloseSnackBar should set snackBarObj to close', () => {
    component.handleOnCloseSnackBar();
    expect(component.snackBarObj).toEqual({isOpen: false,isSuccess: true,message: ''});
  });

  it('#handleOnCloseSnackBar should set snackBarObj to close', () => {
    component.handleOnCloseSnackBar();
    expect(component.snackBarObj).toEqual({isOpen: false,isSuccess: true,message: ''});
  });

  it('#onEdit should set contactDataToEdit', () => {
    component.onEdit({} as any);
    expect(component.contactDataToEdit).toBeTruthy();
  });

  it('#onDelete should set contactIdToDelete', () => {
    component.onDelete({id: '123'} as any);
    expect(component.contactIdToDelete).toBeTruthy();
  });


});
