import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixfinaleByidComponent } from './choixfinale-byid.component';

describe('ChoixfinaleByidComponent', () => {
  let component: ChoixfinaleByidComponent;
  let fixture: ComponentFixture<ChoixfinaleByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixfinaleByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixfinaleByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
