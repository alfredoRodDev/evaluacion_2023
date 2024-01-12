import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SnackBar } from 'src/app/interfaces/snackBar.interface';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnChanges{

  @Output() onCloseSnackBarEvent = new EventEmitter();
  @Input() snackBarObj : SnackBar = {
    isOpen: false,
    isSuccess: true,
    message: ''
  }
  isOpening : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.isOpening && this.snackBarObj.isOpen) {
        this.isOpening=true;
        setTimeout(() => {
          this.onSnackBar();
        },3000);
    } 
  }

  onSnackBar(){
    this.isOpening=false;
    this.onCloseSnackBarEvent.emit();
  }

}
