import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    constructor(private service: ShareService) { }

    Departments: any = [];
    ngOnInit(): void {
        this.refreshEmpList();
    }
    refreshEmpList() {
        this.service.getDepartments().subscribe(data => {
            this.Departments = data;
            console.log(this.Departments);
        });
    }
}
