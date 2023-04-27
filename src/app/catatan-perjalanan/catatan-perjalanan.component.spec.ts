import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatatanPerjalananComponent } from './catatan-perjalanan.component';

describe('CatatanPerjalananComponent', () => {
  let component: CatatanPerjalananComponent;
  let fixture: ComponentFixture<CatatanPerjalananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatatanPerjalananComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatatanPerjalananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
