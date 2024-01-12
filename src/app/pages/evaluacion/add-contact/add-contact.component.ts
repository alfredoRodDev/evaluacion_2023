import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExcelModel } from 'src/app/interfaces/excel.model.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnChanges{

  @Input() isOpenModal: Boolean = false;
  @Input() contactDataToEdit: ExcelModel = {id: '', name: '', lastName: '', phoneNumber: ''};
  @Output() onSubmitEvent= new EventEmitter<ExcelModel>();
  @Output() onCloseModalEvent= new EventEmitter();
  registerForm!: FormGroup;
  isSubmitting: boolean = false;
  isHasBeenValidated: boolean = false
  isEditing: boolean = false;
  submitText: string = 'Agregar';

  constructor(
    private fb: FormBuilder
  ){ this.buildForm();}

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isEditing && this.contactDataToEdit.id !== ''){
      this.isEditing = true;
      this.registerForm.controls['name'].setValue(this.contactDataToEdit.name);
      this.registerForm.controls['lastName'].setValue(this.contactDataToEdit.lastName);
      this.registerForm.controls['phoneNumber'].setValue(this.contactDataToEdit.phoneNumber);
      this.submitText = 'Actualizar';
    }
  }

  buildForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  onCloseModal(){
    this.onCloseModalEvent.emit();
    this.handleResetForm();
  }

  onSubmit(){
    if (this.registerForm.invalid) {
      this.isHasBeenValidated = true;
      return;
    }
    this.isSubmitting = true;
    if(this.contactDataToEdit.id === ''){
      this.submitText = 'Agregando';
    }else{
      this.submitText = 'Actualizando';
    }

    setTimeout(() => {
      this.isSubmitting = false;
      this.isHasBeenValidated = false;
      const obj: ExcelModel = {
        id: this.contactDataToEdit.id,
        name: this.registerForm.value.name,
        lastName: this.registerForm.value.lastName,
        phoneNumber: this.registerForm.value.phoneNumber
      }
      this.onSubmitEvent.emit(obj);
      this.handleResetForm();
    }, 1500);

  }

  handleResetForm(){
    this.isEditing = false;
    this.submitText = 'Agregar';
    this.registerForm.controls['name'].setValue('');
    this.registerForm.controls['lastName'].setValue('');
    this.registerForm.controls['phoneNumber'].setValue('');
  }
}
