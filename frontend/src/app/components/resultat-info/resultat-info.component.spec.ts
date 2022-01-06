import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatInfoComponent } from './resultat-info.component';

describe('ResultatInfoComponent', () => {
  let component: ResultatInfoComponent;
  let fixture: ComponentFixture<ResultatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
