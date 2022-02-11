import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciasDirectasComponent } from './transferencias-directas.component';

describe('TransferenciasDirectasComponent', () => {
  let component: TransferenciasDirectasComponent;
  let fixture: ComponentFixture<TransferenciasDirectasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciasDirectasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciasDirectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
