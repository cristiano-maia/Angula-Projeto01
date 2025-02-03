import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FilhoComponent } from './filho/filho.component';
import { PaiComponent } from './pai/pai.component';



@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    FilhoComponent,
    PaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
