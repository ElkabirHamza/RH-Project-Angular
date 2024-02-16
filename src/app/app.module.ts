import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OptionpageComponent } from './optionpage/optionpage.component';
import { CongepageComponent } from './congepage/congepage.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import { AbsencepageComponent } from './absencepage/absencepage.component';
import { StagiairepageComponent } from './stagiairepage/stagiairepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OptionpageComponent,
    CongepageComponent,
    EmployeepageComponent,
    AbsencepageComponent,
    StagiairepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
