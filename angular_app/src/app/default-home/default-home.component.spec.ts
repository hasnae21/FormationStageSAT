import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHomeComponent } from './default-home.component';

describe('DefaultHomeComponent', () => {
  let component: DefaultHomeComponent;
  let fixture: ComponentFixture<DefaultHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultHomeComponent]
    });
    fixture = TestBed.createComponent(DefaultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
