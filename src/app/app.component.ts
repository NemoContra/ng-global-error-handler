import { Component } from '@angular/core';
import { SilentReportableError } from './silent-reportable-error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-global-error-handler';

  public clickToThrow(): void {
    throw new SilentReportableError('You should have not clicked this button...', true);
  }
}
