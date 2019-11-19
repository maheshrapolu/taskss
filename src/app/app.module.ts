import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl }    from '@angular/forms';
import { CubePipe } from './cube.pipe';
import { RangePipe } from './range.pipe';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import {CommonModule} from '@angular/common';
import{ HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    CubePipe,
    RangePipe,
    SearchComponent,
    SearchPipe,
    ReactiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng5SliderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
