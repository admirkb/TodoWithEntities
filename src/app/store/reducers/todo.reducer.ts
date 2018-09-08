
import * as todoActions from '../actions/todo.actions';

export function todoReducer(state = [], action: todoActions.TodoActions) {
    switch (action.type) {
      case todoActions.ADD_TODO:
        return [action.payload.todo, ...state];
      case todoActions.DELETE_TODO:
        return state.filter(item => item.id !== action.payload.id);
      case todoActions.UPDATE_TODO:
        return state.map(item => {
          return item.id === action.payload.id
            ? Object.assign({}, item, { value: action.payload.newValue })
            : item;
        });
      case todoActions.TOGGLE_DONE:
        return state.map(item => {
          return item.id === action.payload.id
            ? Object.assign({}, item, { done: action.payload.done })
            : item;
        });
      default:
        return state;
    }
  }