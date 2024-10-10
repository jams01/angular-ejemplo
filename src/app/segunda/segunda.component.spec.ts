import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaComponent } from './segunda.component';

describe('SegundaComponent', () => {
  let component: SegundaComponent;
  let fixture: ComponentFixture<SegundaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundaComponent]
    });
    fixture = TestBed.createComponent(SegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
