import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientiComponent } from './detail-clienti.component';

describe('DetailClientiComponent', () => {
  let component: DetailClientiComponent;
  let fixture: ComponentFixture<DetailClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
