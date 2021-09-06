import { Component, OnInit } from '@angular/core';

/* USER_INFO json definition */
/* External JSON can be used instead as well*/
const USER_INFO = [
  {
    "id":1120,
    "name": "Sonam Dorji",
    "basicPay": 32500,
    "due": 20000,
    "advPayment": 30000
},
{
    "id":1121,
    "name": "Pema Wangmo",
    "basicPay": 32000,
    "due": 15000,
    "advPayment": 20000
},
{
    "id":1122,
    "name": "Chimmi Pem",
    "basicPay": 31000,
    "due": 8500,
    "allowance": 0,
    "advPayment": 15000
},
{
    "id":1123,
    "name": "Sangay Yonten",
    "basicPay": 28000,
    "due": 0,
    "advPayment": 0
}
];

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss']
})
export class DeductionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'basicPay', 'advPayment', 'due', 'action'];
  dataSource = USER_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
