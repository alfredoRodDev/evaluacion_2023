import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteComponent } from './modal-delete.component';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent]
    });
    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onCancel should emit onCancelEvent', () => {
    spyOn(component.onCancelEvent, 'emit');
    component.onCancel();
    expect(component.onCancelEvent.emit).toHaveBeenCalled();
  });

  it('#onSubmit should emit onSubmitEvent', () => {
    spyOn(component.onSubmitEvent, 'emit');
    component.onSubmit();
    expect(component.onSubmitEvent.emit).toHaveBeenCalled();
  });
});

