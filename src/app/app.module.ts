import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SegundaComponent } from './segunda/segunda.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';  // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SegundaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
