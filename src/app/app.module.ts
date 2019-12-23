import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SpaBodyComponent } from './spa-body/spa-body.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaBodyComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    Ng2CarouselamosModule,
    MatTooltipModule,
    MatPaginatorModule,
    FormsModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

