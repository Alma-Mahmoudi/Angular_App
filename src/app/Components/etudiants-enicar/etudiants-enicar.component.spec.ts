import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsEnicarComponent } from './etudiants-enicar.component';

describe('EtudiantsEnicarComponent', () => {
  let component: EtudiantsEnicarComponent;
  let fixture: ComponentFixture<EtudiantsEnicarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantsEnicarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantsEnicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
