import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    DepartmentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
