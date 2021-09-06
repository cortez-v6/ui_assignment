import { Component, OnInit } from '@angular/core';

/* USER_INFO json definition */
/* External JSON can be used instead as well*/
const USER_INFO = [
  {
    "id":1120,
    "name": "Sonam Dorji",
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 30000,
    "deadline": "11/11/2021",
    "application": "12/11/2019"
},
{
    "id":1121,
    "name": "Pema Wangmo",
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 20000,
    "deadline": "6/10/2021",
    "application": "7/10/2019"
},
{
    "id":1122,
    "name": "Chimmi Pem",
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 30000,
    "deadline": "21/12/2021",
    "application": "22/12/2019"
},
{
    "id":1123,
    "name": "Sangay Yonten",
    "loanAmt": 50000,
    "loanType": "HL",
    "loanDue": 50000,
    "deadline": "17/8/2022",
    "application": "18/8/2020"
}
];

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'loanType', 'loanAmt', 'loanDue','application','deadline', 'action'];
  dataSource = USER_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
