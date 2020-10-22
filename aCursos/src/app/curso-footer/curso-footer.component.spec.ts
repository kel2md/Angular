import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFooterComponent } from './curso-footer.component';

describe('CursoFooterComponent', () => {
  let component: CursoFooterComponent;
  let fixture: ComponentFixture<CursoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
