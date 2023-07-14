import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteComponent } from './admin-delete.component';

describe('AdminDeleteComponent', () => {
  let component: AdminDeleteComponent;
  let fixture: ComponentFixture<AdminDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeleteComponent]
    });
    fixture = TestBed.createComponent(AdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
