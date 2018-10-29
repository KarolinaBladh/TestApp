import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhoneBookListComponent } from './phone-book-list/phone-book-list.component';

import { PhoneownerService } from './phoneowner.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule
  ],
  providers: [PhoneownerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
