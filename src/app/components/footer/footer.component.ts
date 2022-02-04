import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  pendingTasks = 3; // TODO - set it based on other task information

  constructor() {}

  ngOnInit(): void {}

  getPendingTasks(): string {
    if (this.pendingTasks === 1) return '1 pending task';
    if (this.pendingTasks > 1) return `${this.pendingTasks} pending tasks`;
    return '';
  }
}
