import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input()
  tasks: ITask[] = [];

  constructor() {}

  ngOnInit(): void {}

  getPendingTasks(): string {
    if (this.tasks.length === 1) return '1 pending task';
    if (this.tasks.length > 1) return `${this.tasks.length} pending tasks`;
    return '';
  }
}
