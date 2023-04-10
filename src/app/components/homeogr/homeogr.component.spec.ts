import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeogrComponent } from './homeogr.component';

describe('HomeogrComponent', () => {
  let component: HomeogrComponent;
  let fixture: ComponentFixture<HomeogrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeogrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeogrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
