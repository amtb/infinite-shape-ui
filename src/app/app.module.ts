import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
