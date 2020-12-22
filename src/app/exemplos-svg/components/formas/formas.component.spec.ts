import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormasComponent } from './formas.component';

describe('FormasComponent', () => {
  let component: FormasComponent;
  let fixture: ComponentFixture<FormasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
