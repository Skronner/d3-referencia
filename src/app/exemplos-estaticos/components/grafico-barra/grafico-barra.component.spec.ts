import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficoBarraComponent } from './grafico-barra.component';

describe('GraficoBarraComponent', () => {
  let component: GraficoBarraComponent;
  let fixture: ComponentFixture<GraficoBarraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
