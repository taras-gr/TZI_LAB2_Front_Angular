import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeasarComponent } from './ceasar.component';

describe('CeasarComponent', () => {
  let component: CeasarComponent;
  let fixture: ComponentFixture<CeasarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeasarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeasarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
