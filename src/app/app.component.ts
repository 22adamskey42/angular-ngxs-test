import { Component, NgZone, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestModule } from './test/test.module';
import { NgxsModule } from '@ngxs/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'testapp';

  constructor(private readonly zone: NgZone) {}

  ngOnInit(): void {
    this.zone.onError.subscribe((x) =>
      console.log('NgZone on error emitted:', x)
    );
  }
}
