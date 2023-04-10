import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeGroupesComponent } from './admin-liste-groupes.component';

describe('AdminListeGroupesComponent', () => {
  let component: AdminListeGroupesComponent;
  let fixture: ComponentFixture<AdminListeGroupesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeGroupesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
