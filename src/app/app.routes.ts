import { Routes } from '@angular/router';
import { TestModule } from './test/test.module';
import { ParentComponent } from './test/components/parent/parent.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./test/test.module').then((x) => x.TestModule),
  },
];
