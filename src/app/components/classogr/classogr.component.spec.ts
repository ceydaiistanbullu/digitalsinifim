import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassogrComponent } from './classogr.component';

describe('ClassogrComponent', () => {
  let component: ClassogrComponent;
  let fixture: ComponentFixture<ClassogrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassogrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassogrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
