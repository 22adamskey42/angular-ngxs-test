import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-error',
  standalone: false,
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit, OnDestroy {
  private destroySubj: Subject<void> = new Subject();
  error: string = 'No error';

  constructor(private readonly errorService: ErrorService) {}

  ngOnDestroy(): void {
    this.destroySubj.next();
  }

  ngOnInit(): void {
    this.errorService.errorStream
      .pipe(
        takeUntil(this.destroySubj),
        tap((x) => console.log('Error component - received:', x))
      )
      .subscribe((x) => (this.error = x?.message ?? 'No error'));
  }
}
