import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { ShareService } from './share.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    DepartmentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
