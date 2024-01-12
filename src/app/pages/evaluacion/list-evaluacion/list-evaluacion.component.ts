import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExcelModel } from 'src/app/interfaces/excel.model.interface';

@Component({
  selector: 'app-list-evaluacion',
  templateUrl: './list-evaluacion.component.html',
  styleUrls: ['./list-evaluacion.component.css']
})
export class ListEvaluacionComponent {
 @Input() excelData: ExcelModel[] = [];
 @Output() onEditEvent = new EventEmitter<ExcelModel>();
 @Output() onDeleteEvent = new EventEmitter<ExcelModel>();

  onEdit(excel: ExcelModel) {
    this.onEditEvent.emit(excel);
  }
  onDelete(excel: ExcelModel) {
    this.onDeleteEvent.emit(excel);
  }
}
