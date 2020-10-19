import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  items = this.expenseService.expenses;

  constructor( private userService: UserService,
               private expenseService: ExpenseService,
               private router: Router ) {
  }

  ngOnInit() {

  }

  showLogin() {
    this.router.navigateByUrl('/login');
  }

  onSelect(expense) {
    this.expenseService.selectedExpense = expense;
    this.router.navigateByUrl('/expense-detail');
  }

  newExpense() {
    this.router.navigateByUrl('/expense-new');
  }

}