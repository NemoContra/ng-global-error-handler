import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-global-error-handler';

  public clickToThrow(): void {
    throw new Error('You should have not clicked this button...');
  }
}
