import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentformatPipe } from './pipes/currentformat.pipe';
import { MessageListComponent } from './components/message-list/message-list.component';

// the second parameter 'pt' is optional
registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentformatPipe,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
