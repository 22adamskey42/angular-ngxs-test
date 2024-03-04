import { ErrorHandler, inject } from '@angular/core';
import { ErrorService } from '../test/services/error.service';

export class TestErrorHandler implements ErrorHandler {
  errorService: ErrorService;

  constructor() {
    this.errorService = inject(ErrorService);
  }

  handleError(error: Error): void {
    console.log('Test Error Handler - received error:', error);
    this.errorService.showError(error);
  }
}
