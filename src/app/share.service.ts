import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareService {

    readonly APIUrl="https://localhost:5000/api";

    constructor(private http:HttpClient) { }

  
  getDepartments(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Departments');
  }
}
