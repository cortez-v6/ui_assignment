import { Component, OnInit } from '@angular/core';

/* USER_INFO json definition */
/* External JSON can be used instead as well*/
const USER_INFO = [
  {
    "vendor":"TashiInfoCom",
    "item": "Foundation Day",
    "revenue": 40000,
    "expense": 38500
},
{
  "vendor":"Dorji Enterprise",
  "item": "Cartridge",
  "revenue": 15000,
  "expense": 9750
}
];

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  displayedColumns: string[] = ['vendor', 'item', 'revenue', 'expense'];
  dataSource = USER_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
