import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/reducers/todo.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', todoReducer)
  ],
  declarations: []
})
export class TodoModule {}