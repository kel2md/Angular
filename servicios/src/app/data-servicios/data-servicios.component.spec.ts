import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiciosComponent } from './data-servicios.component';

describe('DataServiciosComponent', () => {
  let component: DataServiciosComponent;
  let fixture: ComponentFixture<DataServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
