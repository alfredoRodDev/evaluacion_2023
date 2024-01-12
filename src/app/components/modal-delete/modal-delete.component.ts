import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  @Input() isOpenModalDelete:Boolean = false;
  @Output() onCancelEvent = new EventEmitter();
  @Output() onSubmitEvent = new EventEmitter();

  onCancel(){
    this.onCancelEvent.emit();
  }

  onSubmit(){
    this.onSubmitEvent.emit();
  }
}
