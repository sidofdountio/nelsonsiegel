import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table'; 
import { ParameterComponent } from './home/parameter/parameter.component';
import { NelsonCurveComponent } from './home/nelson-curve/nelson-curve.component';
import { NelsonsiegelComponent } from './home/nelsonsiegel/nelsonsiegel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NelsonListComponent } from './home/nelson-list/nelson-list.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { UpdateParameterComponent } from './home/parameter/update-parameter/update-parameter.component'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddNelsonSiegelComponent } from './home/nelsonsiegel/add-nelson-siegel/add-nelson-siegel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParameterComponent,
    NelsonCurveComponent,
    NelsonsiegelComponent,
    NelsonListComponent,
    UpdateParameterComponent,
    AddNelsonSiegelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
