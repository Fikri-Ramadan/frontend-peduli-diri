import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahCatatanComponent } from './tambah-catatan.component';

describe('TambahCatatanComponent', () => {
  let component: TambahCatatanComponent;
  let fixture: ComponentFixture<TambahCatatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahCatatanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahCatatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
