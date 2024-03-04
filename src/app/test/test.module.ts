import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { NgxsModule } from '@ngxs/store';
import { TestRoutingModule } from './test-routing.module';
import { TestState } from './state/test-state';
import { ColorComponent } from './components/color/color.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [ParentComponent, ColorComponent, ErrorComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    NgxsModule.forFeature([TestState]),
  ],
})
export class TestModule {}
