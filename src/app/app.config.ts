import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { TestErrorHandler } from './infrastructure/test-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot()),
    {
      provide: ErrorHandler,
      useClass: TestErrorHandler,
    },
  ],
};
