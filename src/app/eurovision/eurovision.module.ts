import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const appRoutes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, CitiesComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
     HomeComponent, CitiesComponent
  ]
})
export class EurovisionModule { }
