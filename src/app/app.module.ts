import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnGoingRequestInterceptor } from '../services';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { ShapeModule } from './shape/shape.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SearchModule,
    ShapeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: OnGoingRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
