import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EurovisionModule } from './eurovision/eurovision.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    EurovisionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
