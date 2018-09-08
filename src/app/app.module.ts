import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoMachineComponent } from './todo-machine/todo-machine.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './store/reducers/todo.reducer';
import { FormsModule } from '@angular/forms';

const reducersObj = {
  todoReducer: todoReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    TodoMachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducersObj),
    // StoreModule.forFeature(circlesReducer),
    StoreDevtoolsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 80 //  Retains last 80 states
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
