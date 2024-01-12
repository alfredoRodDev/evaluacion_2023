import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build form', () => {
    expect(component.registerForm).toBeTruthy();
  });

  it('should validate email error', () => {
    component.registerForm.controls['email'].setValue('test');
    expect(component.registerForm.valid).toBeFalsy();
  });
  
  it('should validate email success', () => {
    component.registerForm.controls['email'].setValue('test@email.com');
    expect(component.registerForm.controls['email'].valid).toBeTruthy();
  });

  it('should validate password error', () => {
    component.registerForm.controls['password'].setValue('test');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should validate password success', () => {
    component.registerForm.controls['password'].setValue('123456');
    expect(component.registerForm.controls['password'].valid).toBeTruthy();
  });

  it('should validate email and password', () => {
    component.registerForm.controls['email'].setValue('test@gmail.com');
    component.registerForm.controls['password'].setValue('123456');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('#onSubmit should return false', () => {
    component.registerForm.controls['email'].setValue('test');
    component.registerForm.controls['password'].setValue('123');
    component.onSubmit();
    expect(component.isCredentialsInvalid).toBeFalsy();
  });

  it('#onSubmit should set isSubmitting to true', () => {
    component.registerForm.controls['email'].setValue('test@gmail.com');
    component.registerForm.controls['password'].setValue('123456');
    component.onSubmit();
    expect(component.isSubmitting).toBeTruthy();
  });
});
