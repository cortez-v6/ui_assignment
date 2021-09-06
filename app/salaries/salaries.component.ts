import { Component, OnInit } from '@angular/core';

/* USER_INFO json definition */
/* External JSON can be used instead as well*/
const USER_INFO = [
  {
    "id":1120,
    "name": "Sonam Dorji",
    "designation": "Backend Developer",
    "age": 36, 
    "joinDate": "12/2/2015",
    "basicPay": 32500,
    "deductions": 2500,
    "allowance": 0,
    "advPayment": 30000,
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 30000,
    "deadline": "11/11/2021",
    "application": "12/11/2019",
    "total": 30000
},
{
    "id":1121,
    "name": "Pema Wangmo",
    "designation": "UI Developer", 
    "age": 28, 
    "joinDate": "20/4/2015",
    "basicPay": 32000,
    "deductions": 2500,
    "allowance": 0,
    "advPayment": 20000,
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 20000,
    "deadline": "6/10/2021",
    "application": "7/10/2019",
    "total": 31000
},
{
    "id":1122,
    "name": "Chimmi Pem", 
    "designation": "UI Developer", 
    "age": 20, 
    "joinDate": "12/11/2018",
    "basicPay": 31000,
    "deductions": 2500,
    "allowance": 0,
    "advPayment": 30000,
    "loanAmt": 0,
    "loanType": "HL",
    "loanDue": 30000,
    "deadline": "21/12/2021",
    "application": "22/12/2019",
    "total": 31500
},
{
    "id":1123,
    "name": "Sangay Yonten",
    "designation": "UX Developer", 
    "age": 23, 
    "joinDate": "12/6/2016",
    "basicPay": 28000,
    "deductions": 2500,
    "allowance": 0,
    "advPayment": 0,
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 50000,
    "deadline": "17/8/2022",
    "application": "18/8/2020",
    "total": 25500
}
];

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss']
})
export class SalariesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'basicPay', 'deductions', 'allowance','total', 'action'];
  dataSource = USER_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
