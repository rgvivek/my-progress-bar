import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProgressBarComponent }  from './progress-bar/progress-bar.component';
import { BarsService } from './bars/bars.service';

@NgModule({
  declarations: [
    AppComponent, 
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [BarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
