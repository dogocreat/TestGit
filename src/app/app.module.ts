import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SyncComponent } from './sync/sync.component';
import { SendButtonComponent } from './sendButton/sendButton.component';
import { SendButtonDirective } from './sendButton/sendButton.directive';

@NgModule({
  declarations: [
    AppComponent,
    SyncComponent,
    SendButtonComponent,
    SendButtonDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent,SyncComponent,SendButtonComponent]
})
export class AppModule { }
