import { Component, OnInit, ViewChild } from '@angular/core';

/* USER_INFO json definition */
/* External JSON can be used instead as well*/
const USER_INFO = [
  {"id":1120,"name": "Sonam Dorji", "designation": "Backend Developer", "age": 36, "joinDate": "12/2/2015"},
  {"id":1121,"name": "Pema Wangmo", "designation": "UI Developer", "age": 28, "joinDate": "20/4/2015"},
  {"id":1122,"name": "Chimmi Pem", "designation": "UI Developer", "age": 20, "joinDate": "12/11/2018"},
  {"id":1123,"name": "Sangay Yonten", "designation": "UX Developer", "age": 23, "joinDate": "12/6/2016"}
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'designation', 'age', 'joinDate', 'action'];
  dataSource = USER_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
