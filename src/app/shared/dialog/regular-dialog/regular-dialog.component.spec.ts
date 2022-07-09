import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularDialogComponent } from './regular-dialog.component';

describe('RegularDialogComponent', () => {
  let component: RegularDialogComponent;
  let fixture: ComponentFixture<RegularDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
