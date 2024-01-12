import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactComponent } from './add-contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onCloseModal should emit event', () => {
    spyOn(component.onCloseModalEvent, 'emit');
    component.onCloseModal();
    expect(component.onCloseModalEvent.emit).toHaveBeenCalled();
  });

  it('#onSubmit should return false', () => {
    component.registerForm.controls['name'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    component.registerForm.controls['phoneNumber'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('#onSubmit should return true', () => {
    component.registerForm.controls['name'].setValue('test');
    component.registerForm.controls['lastName'].setValue('test');
    component.registerForm.controls['phoneNumber'].setValue('test');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('it should reset form', () => {
    component.registerForm.controls['name'].setValue('test');
    component.registerForm.controls['lastName'].setValue('test');
    component.registerForm.controls['phoneNumber'].setValue('test');
    component.handleResetForm();
    expect(component.registerForm.valid).toBeFalsy();
  });
});
