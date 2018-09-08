import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMachineComponent } from './todo-machine.component';

describe('TodoMachineComponent', () => {
  let component: TodoMachineComponent;
  let fixture: ComponentFixture<TodoMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
