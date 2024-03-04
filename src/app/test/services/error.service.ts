import { Injectable } from '@angular/core';
import { Observable, Subject, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private subj: Subject<Error | null> = new Subject();

  errorStream: Observable<Error | null> = this.subj.asObservable();

  showError(error: Error): void {
    console.log('Error Service - emitting error', error);
    this.subj.next(error);

    setTimeout(() => {
      console.log('Error Service - emitting null');
      this.subj.next(null);
    }, 3000);
  }
}
