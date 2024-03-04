import { Action, State, StateContext } from '@ngxs/store';
import { CreateColor } from './test-actions';
import { catchError, of, switchMap, tap, throwError } from 'rxjs';
import { TestModel } from './test-model';

const initialState: TestModel = {
  colors: [],
  success: true,
};

@State({
  name: 'TestState',
  defaults: initialState,
})
export class TestState {
  @Action(CreateColor)
  createColor(ctx: StateContext<TestModel>, action: CreateColor) {
    return of(action.color).pipe(
      switchMap((x) => {
        return x === 'red' ? throwError(() => new Error('bad color')) : of(x);
      }),
      tap((x) => {
        const state = ctx.getState();
        state.colors.push(x);
        ctx.patchState({
          colors: state.colors,
          success: true,
        });
      }),
      catchError((err) => {
        ctx.patchState({
          success: false,
        });

        throw err;
      })
    );
  }
}
