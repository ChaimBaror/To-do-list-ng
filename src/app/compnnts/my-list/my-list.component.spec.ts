import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLIstComponent } from './my-list.component';

describe('MyLIstComponent', () => {
  let component: MyLIstComponent;
  let fixture: ComponentFixture<MyLIstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLIstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
