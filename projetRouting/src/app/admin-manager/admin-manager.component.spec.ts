import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerComponent } from './admin-manager.component';

describe('AdminManagerComponent', () => {
  let component: AdminManagerComponent;
  let fixture: ComponentFixture<AdminManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManagerComponent]
    });
    fixture = TestBed.createComponent(AdminManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
