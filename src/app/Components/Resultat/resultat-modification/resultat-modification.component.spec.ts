import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatModificationComponent } from './resultat-modification.component';

describe('ResultatModificationComponent', () => {
  let component: ResultatModificationComponent;
  let fixture: ComponentFixture<ResultatModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
