import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecialComponent } from './card-especial.component';

describe('CardEspecialComponent', () => {
  let component: CardEspecialComponent;
  let fixture: ComponentFixture<CardEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
