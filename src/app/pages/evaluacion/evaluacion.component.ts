import { Component } from '@angular/core';
import { ExcelModel } from 'src/app/interfaces/excel.model.interface';
import * as XLXS from 'xlsx';
import { v4 as uuid } from 'uuid'
import { SnackBar } from 'src/app/interfaces/snackBar.interface';


@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent {

  excelData: ExcelModel[] = [];
  contactDataToEdit: ExcelModel = {id: '', name: '', lastName: '', phoneNumber: ''};
  isOpenModal:Boolean = false;
  isOpenModalDelete:Boolean = false;
  snackBarObj : SnackBar = {isOpen: false,isSuccess: true,message: ''};
  contactIdToDelete: string = '';

  onOpenModal(){
    this.isOpenModal = true;
  }

  onCloseModal(){
    this.isOpenModal = false;
  }

  onSubmit(obj: ExcelModel){
    if(obj.id === ''){
      obj.id = uuid();
      let newData = [...this.excelData, obj];
      this.excelData = [...newData];
      this.snackBarObj = {isOpen: true,isSuccess: true,message: 'Contacto agregado correctamente'};
    }else{
      this.contactDataToEdit = {id: '', name: '', lastName: '', phoneNumber: ''};
      let newData = [...this.excelData];
      let index = newData.findIndex((el) => el.id === obj.id);
      newData[index] = obj;
      this.excelData = [...newData];
      this.snackBarObj = {isOpen: true,isSuccess: true,message: 'Contacto editado correctamente'};
    }
    this.isOpenModal = false;
  }

  onReadExcelFile(event: any){
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      const workBook = XLXS.read(fileReader.result, {type: 'binary'});
      const sheetNames = workBook.SheetNames;
      this.excelData = XLXS.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      console.log(this.excelData);
    }
  }

  handleOnCloseModalDelete(){
    this.isOpenModalDelete = false;
  }

  handleOnSubmitDelete(){
    let newData = this.excelData.filter((el) => el.id !== this.contactIdToDelete);
    this.excelData = [...newData];
    this.isOpenModalDelete = false;
    this.snackBarObj = {isOpen: true,isSuccess: true,message: 'Contacto eliminado correctamente'};
  }
  
  handleOnCloseSnackBar(){
    this.snackBarObj = {isOpen: false,isSuccess: true,message: ''};
  }

  onEdit(obj: ExcelModel) {
    this.contactDataToEdit = {...obj};
    this.isOpenModal = true;
  }

  onDelete(obj: ExcelModel) {
    this.contactIdToDelete = obj.id;
    this.isOpenModalDelete = true;
  }
}