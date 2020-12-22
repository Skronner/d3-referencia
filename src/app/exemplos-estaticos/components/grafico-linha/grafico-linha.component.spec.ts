import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficoLinhaComponent } from './grafico-linha.component';

describe('GraficoLinhaComponent', () => {
  let component: GraficoLinhaComponent;
  let fixture: ComponentFixture<GraficoLinhaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
