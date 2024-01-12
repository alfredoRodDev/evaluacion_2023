import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header-evaluacion',
  templateUrl: './header-evaluacion.component.html',
  styleUrls: ['./header-evaluacion.component.css'],
})
export class HeaderEvaluacionComponent {

  @Output() onOpenModalEvent = new EventEmitter();

  onClick() {
    this.onOpenModalEvent.emit();
  }

}
