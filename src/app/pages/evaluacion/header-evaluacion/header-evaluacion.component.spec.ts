import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEvaluacionComponent } from './header-evaluacion.component';
import { BrowserModule } from '@angular/platform-browser';

describe('HeaderEvaluacionComponent', () => {
  let component: HeaderEvaluacionComponent;
  let fixture: ComponentFixture<HeaderEvaluacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEvaluacionComponent],
      imports: [
        BrowserModule
      ]
    });
    fixture = TestBed.createComponent(HeaderEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onClick should emit event', () => {
    spyOn(component.onOpenModalEvent, 'emit');
    component.onClick();
    expect(component.onOpenModalEvent.emit).toHaveBeenCalled();
  });

});
