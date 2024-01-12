import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvaluacionComponent } from './list-evaluacion.component';

describe('ListEvaluacionComponent', () => {
  let component: ListEvaluacionComponent;
  let fixture: ComponentFixture<ListEvaluacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEvaluacionComponent]
    });
    fixture = TestBed.createComponent(ListEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onEdit should emit event', () => {
    spyOn(component.onEditEvent, 'emit');
    component.onEdit({} as any);
    expect(component.onEditEvent.emit).toHaveBeenCalled();
  });

  it('#onDelete should emit event', () => {
    spyOn(component.onDeleteEvent, 'emit');
    component.onDelete({} as any);
    expect(component.onDeleteEvent.emit).toHaveBeenCalled();
  });
});
