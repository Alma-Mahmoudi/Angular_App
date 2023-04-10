import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixByidComponent } from './choix-byid.component';

describe('ChoixByidComponent', () => {
  let component: ChoixByidComponent;
  let fixture: ComponentFixture<ChoixByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
