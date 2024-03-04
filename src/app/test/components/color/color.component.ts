import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { TestModel } from '../../state/test-model';
import { TestState } from '../../state/test-state';
import { CreateColor } from '../../state/test-actions';

@Component({
  selector: 'app-color',
  standalone: false,
  templateUrl: './color.component.html',
})
export class ColorComponent {
  selectedColor: string = '';

  @Select(TestState)
  state$!: Observable<TestModel>;

  store: Store = inject(Store);

  onCreateColor(): void {
    if (!this.selectedColor) {
      return;
    }

    this.store
      .dispatch(new CreateColor(this.selectedColor))
      .pipe(tap(() => console.log('Dispatch observable')))
      .subscribe();
  }
}
