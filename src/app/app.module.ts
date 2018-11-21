import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './global-error-handler';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useExisting: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
