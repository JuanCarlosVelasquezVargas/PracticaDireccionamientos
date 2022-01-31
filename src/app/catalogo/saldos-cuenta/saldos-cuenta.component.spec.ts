import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldosCuentaComponent } from './saldos-cuenta.component';

describe('SaldosCuentaComponent', () => {
  let component: SaldosCuentaComponent;
  let fixture: ComponentFixture<SaldosCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldosCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldosCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
