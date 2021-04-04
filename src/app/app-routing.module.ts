import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
     { path: "staff", component: StaffComponent },
     { path: "department", component: DepartmentComponent },
     { path: "user", component: UserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule { }
