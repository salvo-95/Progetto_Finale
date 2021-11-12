import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaFattureComponent } from './crea-fatture.component';

describe('CreaFattureComponent', () => {
  let component: CreaFattureComponent;
  let fixture: ComponentFixture<CreaFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
