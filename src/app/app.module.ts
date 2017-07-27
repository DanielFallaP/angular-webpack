import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
/*import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { BuildService } from './build.service';
import { MainGridComponent } from './main-grid.component';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import {MaterializeDirective} from 'angular2-materialize';


@NgModule({
  imports: [
    BrowserModule,
	HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainGridComponent,
    MaterializeDirective,
  ],
  providers: [
    BuildService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
*/
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
